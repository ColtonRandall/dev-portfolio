import Navbar from "../../components/Navbar/Navbar";
import { useState } from "react";
import Box from "@mui/material/Box";
import TextField from "@mui/material/TextField";
import Footer from "../../components/Footer/Footer.jsx";
import "./FizzBuzz.css";

function FizzBuzz() {
  const [input, setInput] = useState(""); // store input while typing
  const [submittedText, setSubmittedText] = useState([]); // store submitted number
  const num = parseInt(input, 10);

  const handleSubmit = (e) => {
    if (e.key === "Enter") {
      e.preventDefault();

      if (num > 200) {
        setSubmittedText("⚠️ Please enter a number lower than 200");
        setInput("");
        return;
      }

      const numbers = [...Array(num).keys()].map((i) => i + 1);

      for (let i = 0; i < numbers.length; i++) {
        if ((i + 1) % 15 === 0) {
          numbers[i] = `FizzBuzz!`;
        } else if ((i + 1) % 3 === 0) {
          numbers[i] = `Fizz`;
        } else if ((i + 1) % 5 === 0) {
          numbers[i] = `Buzz`;
        }
      }

      setSubmittedText(numbers.join("... "));
      setInput(""); 
    }
  };

  return (
    <>
      <title>FizzBuzz</title>
      <Navbar />

      <div
        className="fizzbuzz-container"
        style={{
          display: "flex",
          flexDirection: "column",
          minHeight: "98vh",
        }}
      >
        <div style={{ flex: 1 }}>
          <p id="mainTitle">FizzBuzz Generator</p>
          <hr />
          <h3
            style={{
              marginTop: 50,
              textAlign: "center",
            }}
          >
            If you haven't heard of this game, see{" "}
            <a
              href="https://en.wikipedia.org/wiki/Fizz_buzz#:~:text=Fizz%20buzz%20is%20a%20group,with%20the%20word%20%22fizzbuzz%22."
              style={{
                color: "#FA5F55",
                fontWeight: "bold",
              }}
            >
              this link.
            </a>
          </h3>
          <p
            style={{
              textAlign: "center",
            }}
          >
            In a nutshell, the words "Fizz", "Buzz", and "FizzBuzz" replace
            multiples of 3, 5 and both 3 & 5, respectively, while counting up.
          </p>
          <p
            style={{
              textAlign: "center",
            }}
          >
            Enter a number and see what happens...
          </p>

          <Box
            component="form"
            sx={{
              textAlign: "center",
              marginTop: 5,
            }}
            noValidate
            autoComplete="off"
          >
            <TextField
              value={input}
              onChange={(e) => setInput(e.target.value)}
              onKeyDown={handleSubmit}
              type="number"
              id="outlined-basic"
              label="Enter a number"
              color="primary"
              focused
              variant="outlined"
            />
          </Box>

          <p
            style={{
              color: "#FA5F55",
              textAlign: "center",
              marginTop: 50,
              marginLeft: 200,
              marginRight: 200,
            }}
          >
            {submittedText}
          </p>
        </div>

        <Footer />
      </div>
    </>
  );
}

export default FizzBuzz;
