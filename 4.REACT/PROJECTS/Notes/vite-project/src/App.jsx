import { useState } from 'react';
import styles from './App.module.css';

function App() {
  const [task, setTask] = useState('');
  const [taskList, setTaskList] = useState([]);
  const [isEditing, setIsEditing] = useState(false);
  const [currentIndex, setCurrentIndex] = useState(null);

  const handleChange = (e) => {
    setTask(e.target.value);
  };

  const handleSave = () => {
    if (task.trim() === '') return;

    if (isEditing) {
      const updatedList = [...taskList];
      updatedList[currentIndex] = task;
      setTaskList(updatedList);
      setIsEditing(false);
      setCurrentIndex(null);
    } else {
      setTaskList([...taskList, task]);
    }

    setTask('');
  };

  const handleEdit = (index) => {
    setTask(taskList[index]);
    setIsEditing(true);
    setCurrentIndex(index);
  };

  const handleDelete = (index) => {
    const updatedList = taskList.filter((_, i) => i !== index);
    setTaskList(updatedList);
    if (isEditing && index === currentIndex) {
      setIsEditing(false);
      setTask('');
    }
  };

  return (
    <div>
      <h1 className={styles.heading}>NOTES</h1>
      <div className={styles.textarea}>
        <textarea
          cols="30"
          rows="5"
          placeholder="Enter your notes here..."
          value={task}
          onChange={handleChange}
        ></textarea>
        <button className={styles.save} onClick={handleSave}>
          {isEditing ? 'Update' : 'Save'}
        </button>
      </div>

      {/* Display notes */}
      <div style={{ padding: '10px' }}>
        {taskList.map((note, index) => (
          <div key={index} style={{ marginBottom: '10px', border: '1px solid gray', padding: '10px' }}>
            <p>{note}</p>
            <button onClick={() => handleEdit(index)} style={{ marginRight: '10px' }}>Edit</button>
            <button onClick={() => handleDelete(index)}>Delete</button>
          </div>
        ))}
      </div>
    </div>
  );
}

export default App;
