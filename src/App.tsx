import { useEffect, useRef, useState } from "react";
import "./App.css";

function App() {
  const [digitCount, setDigitCount] = useState(3);
  const [inputArr, setInputArr] = useState(new Array(digitCount).fill(""));

  const inputRef = useRef<(HTMLInputElement | null)[]>([]);

  useEffect(() => {

    inputRef.current[0]?.focus()


  }, [])

  useEffect(() => {

    setInputArr(new Array(digitCount).fill(""))
    inputRef.current[0]?.focus()

  }, [digitCount])


  const handleChange = (value: any, index: number) => {
    if (isNaN(value)) return;

    const newValue = value.trim();
    const newArr = [...inputArr];
    newArr[index] = newValue.slice(-1);
    setInputArr(newArr);

    newValue && inputRef.current[index + 1]?.focus()
  };

  const handleKeyDown = (e: any, index: number) => {
    if (!e.target.value && e.key === 'Backspace') {
      inputRef.current[index - 1]?.focus()
    }
  }


  return (
    <>
      <h1>validate otp</h1>
      <div className="count-container">
        <p> Input Count</p>
        <div>

          <button type="button" onClick={() => setDigitCount(digitCount + 1)}>
            +
          </button>
          <button type="button" onClick={() => setDigitCount(digitCount - 1)}>
            -
          </button>
        </div>
      </div>
      <div>

        {inputArr.map((item, index) => {
          return (
            <input
              className="input-container"
              key={index}
              value={item}
              ref={(item) => {
                if (inputRef?.current) {
                  inputRef.current[index] = item;
                }
              }}
              onChange={(e) => handleChange(e.target.value, index)}
              onKeyDown={(e) => handleKeyDown(e, index)}
            />
          );
        })}
      </div>

    </>
  );
}

export default App;
