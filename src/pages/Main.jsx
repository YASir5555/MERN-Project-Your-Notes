import React, { useEffect, useState } from 'react';

import classes from '../assets/css/Main.module.css';

import UncheckIcon from '../components/UncheckIcon';
import Nav from '../components/Nav';
import MainBg from '../components/MainBg';
import NoteBody from '../components/NoteBody';
import { useAppContext } from '../context/appContext';
import { Navigate } from 'react-router-dom';

let initialState = localStorage.getItem('notes') || [];

const Main = () => {
  const [notes, setNotes] = useState([...initialState]);
  const [noteToDo, setNoteToDo] = useState('');
  const [filter, setFilter] = useState('all');
  const { user } = useAppContext();
  if (!user) {
    return <Navigate to="/register" />;
  }
  const handleChange = (e) => {
    setNoteToDo(e.target.value);
  };

  const onSubmit = (e) => {
    e.preventDefault();
    setNotes((notes) => [
      ...notes,
      {
        id: Math.random().toString(16).slice(2),
        value: noteToDo,
        checked: false,
      },
    ]);
    setNoteToDo('');
  };

  const checkNote = (id) => {
    const updatedNotes = notes.map((note) => {
      if (note.id === id) {
        return { ...note, checked: !note.checked };
      }
      console.log(note);

      return note;
    });
    setNotes(updatedNotes);
  };

  const removeNote = (id) => {
    const updatedNotes = notes.filter((note) => note.id !== id);
    setNotes(updatedNotes);
  };

  const clearCompleted = () => {
    const updatedNotes = notes.filter((note) => note.checked !== true);
    setNotes(updatedNotes);
    setFilter('all');
  };

  // const fetchData = async () => {
  //   try {
  //     const response = await fetch('/api/v1');
  //     const data = await response.json();
  //     console.log(data);
  //   } catch (error) {
  //     console.log(error);
  //   }
  // };
  // useEffect(() => {
  //   fetchData();
  // }, []);

  return (
    <>
      <Nav />
      {/* // ////////////// */}
      <MainBg>
        <section className={classes.mainSection}>
          <div className={classes.app}>
            <form onSubmit={onSubmit} className={classes.createtask}>
              <UncheckIcon  className={classes.unchecked}/>
              <input
                className={classes.input}
                id="note"
                type="text"
                placeholder="Create a new todo.."
                onChange={handleChange}
                value={noteToDo}
              />
            </form>
            <div>
              <ul className={classes.todos}>
                {notes.map((note) => {
                  if (
                    filter === 'all' ||
                    (filter === 'active' && !note.checked) ||
                    (filter === 'completed' && note.checked)
                  ) {
                    return (
                      <li className={classes.task} key={note.id}>
                        <NoteBody
                          id={note.id}
                          value={note.value}
                          completed={note.checked}
                          removeNote={removeNote}
                          completeNote={checkNote}
                        />
                      </li>
                    );
                  }
                  return null;
                })}
              </ul>
              <div className={classes.Btns}>
                <p>{notes.length} items left</p>
                <div className={classes.btnsFilter}>
                  <button
                    className={filter === 'all' ? classes.activeFilter : ''}
                    onClick={() => setFilter('all')}
                  >
                    All
                  </button>
                  <button
                    className={filter === 'active' ? classes.activeFilter : ''}
                    onClick={() => setFilter('active')}
                  >
                    Active
                  </button>
                  <button
                    className={
                      filter === 'completed' ? classes.activeFilter : ''
                    }
                    onClick={() => setFilter('completed')}
                  >
                    Completed
                  </button>
                </div>

                <button onClick={clearCompleted}>Clear Completed</button>
              </div>
            </div>
          </div>
        </section>
      </MainBg>
    </>
  );
};

export default Main;
