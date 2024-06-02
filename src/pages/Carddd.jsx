import React from 'react';


const App = () => {
  return (
    <div className="product-form">
      <h1>Create something new</h1>
      <div className="form-content">
        <div className="media-input">
          <div className="main-input">
            <div className="input-placeholder">+</div>
          </div>
          <div className="small-inputs">
            <div className="input-placeholder">+</div>
            <div className="input-placeholder">+</div>
            <div className="input-placeholder">+</div>
          </div>
        </div>
        <div className="text-inputs">
          <div className="input-group">
            <label>Input Product name</label>
            <input type="text" className="input-field" placeholder="Input Area" />
          </div>
          <div className="input-group">
            <label>Input Product Description</label>
            <textarea className="input-area" placeholder="Input Area"></textarea>
          </div>
        </div>
      </div>

      <h2>Your Product Highlights</h2>
      <div className="highlights">
        <div className="column">
          <label>Feature 1</label>
          <input type="text" className="input-field" placeholder="Input Area" />
          <label>Feature 2</label>
          <input type="text" className="input-field" placeholder="Input Area" />
          <label>Feature 3</label>
          <input type="text" className="input-field" placeholder="Input Area" />
          <label>Feature 4</label>
          <input type="text" className="input-field" placeholder="Input Area" />
        </div>
        <div className="column">
          <label>Feature 5</label>
          <input type="text" className="input-field" placeholder="Input Area" />
          <label>Feature 6</label>
          <input type="text" className="input-field" placeholder="Input Area" />
          <label>Feature 7</label>
          <input type="text" className="input-field" placeholder="Input Area" />
          <label>Feature 8</label>
          <input type="text" className="input-field" placeholder="Input Area" />
        </div>
      </div>

      <div className="price-section">
        <label>Set Price</label>
        <input type="text" className="price-input" placeholder="₹" />
      </div>

      <div className="buttons">
        <button className="cancel-button">Cancel</button>
        <button className="launch-button">Launch Product</button>
      </div>
    </div>
  );
}

export default App;

const styles = `
.product-form {
  padding: 20px;
  font-family: Arial, sans-serif;
}

.form-content {
  display: flex;
  gap: 20px;
  margin-bottom: 40px;
}

.media-input {
  display: flex;
  flex-direction: column;
  gap: 10px;
}

.main-input, .small-inputs {
  display: flex;
  gap: 10px;
}

.main-input {
  width: 200px;
  height: 200px;
  background-color: #ffeb3b;
  display: flex;
  align-items: center;
  justify-content: center;
}

.small-inputs {
  justify-content: space-between;
}

.small-inputs .input-placeholder {
  width: 60px;
  height: 60px;
  background-color: #ffeb3b;
  display: flex;
  align-items: center;
  justify-content: center;
}

.input-placeholder {
  font-size: 24px;
  color: #555;
  background-color: #ffeb3b;
  border: 2px solid #ccc;
  cursor: pointer;
}

.text-inputs {
  display: flex;
  flex-direction: column;
  gap: 20px;
}

.input-group {
  display: flex;
  flex-direction: column;
}

.input-group label {
  margin-bottom: 5px;
}

.input-field {
  padding: 10px;
  border: 1px solid #ccc;
  border-radius: 5px;
}

.input-area {
  padding: 10px;
  border: 1px solid #ccc;
  border-radius: 5px;
  resize: vertical;
}

.highlights {
  display: flex;
  justify-content: space-between;
  margin-bottom: 40px;
}

.column {
  display: flex;
  flex-direction: column;
  gap: 10px;
}

.price-section {
  margin-bottom: 40px;
}

.price-input {
  padding: 10px;
  border: 1px solid #ccc;
  border-radius: 5px;
  width: 100px;
}

.buttons {
  display: flex;
  gap: 20px;
}

.cancel-button, .launch-button {
  padding: 10px 20px;
  border: none;
  border-radius: 5px;
  cursor: pointer;
  font-size: 16px;
}

.cancel-button {
  background-color: #ffeb3b;
}

.launch-button {
  background-color: #ffeb3b;
}
`;

const styleSheet = document.createElement("style");
styleSheet.type = "text/css";
styleSheet.innerText = styles;
document.head.appendChild(styleSheet);
