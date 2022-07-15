import { useState, useContext } from "react";
import { WordsContext } from "./WordsApi.jsx";

const Form = () => {
  const { addWords } = useContext(WordsContext);
  const [state, setState] = useState();

  const handleChangeInput = (event) => {
    setState({
      ...state,
      [event.target.dataset.name]: event.target.value,
    });

    if (event.target.value.match(/[0-9]/)) {
      alert("Пожалуйста, вводите только буквы");
    }
    else if (event.target.value === "") {
        alert("Пожалуйста, заполните все поля");
      }
  };

  const clearForm = () => {
    setState();
  };

  const onSubmit = () => {
    if (
      state.english !== "" &&
      state.transcription !== "" &&
      state.russian !== "" &&
      state.tags !== ""
    ) {
      addWords(state);
      setState();
    }
  };

  return (
    <form className="row-form" onSubmit={onSubmit}>
      <div className="cell">
        <input
          type="text"
          className="input-form"
          placeholder="English"
          name="english"
          data-name={"english"}
          onChange={handleChangeInput}
        />
      </div>
      <div className="cell">
        <input
          type="text"
          className="input-form"
          placeholder="Transcription"
          name="transcription"
          data-name={"transcription"}
          onChange={handleChangeInput}
        />
      </div>
      <div className="cell">
        <input
          type="text"
          className="input-form"
          placeholder="Russian"
          name="russian"
          data-name={"russian"}
          onChange={handleChangeInput}
        />
      </div>
      <div className="cell">
        <input
          type="text"
          className="input-form"
          placeholder="Tags"
          name="tags"
          data-name={"tags"}
          onChange={handleChangeInput}
        />
      </div>
      <div className="cell-action">
        <button className="button-form" onClick={onSubmit}>Добавить</button>
      </div>
      <div className="cell-action">
        <button className="button-form" onClick={clearForm}>Очистить</button>
      </div>
    </form>
  );
};

export default Form;
