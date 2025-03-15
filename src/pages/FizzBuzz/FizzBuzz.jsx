import Navbar from "../../components/Navbar/Navbar";
import { useState } from "react";
import Box from "@mui/material/Box";
import TextField from "@mui/material/TextField";

function FizzBuzz() {
  const [input, setInput] = useState(""); // store input while typing
  const [submittedText, setSubmittedText] = useState([]); // store submitted number
  const num = parseInt(input, 10);

  const handleSubmit = (e) => {
    if (e.key === "Enter") {
      e.preventDefault();

      const numbers = [...Array(num).keys()].map((i) => i + 1);

      // TODO input validation

      for (let i = 0; i <= numbers.length; i++) {
        if (num > 200) {
          setSubmittedText("Please enter a number lower than 200");
          break;
        }
        if ((i + 1) % 3 === 0) {
          numbers[i] = `Fizz [${i + 1}]`;
        }
        if ((i + 1) % 5 === 0) {
          numbers[i] = `Buzz [${i + 1}]`;
        }
        if ((i + 1) % 15 === 0) {
          numbers[i] = `FizzBuzz! [${i + 1}]`;
        }
        setSubmittedText(numbers.join(" . . . "));
      }
      setInput(""); // clear input field
    }
  };

  return (
    <>
      <title>FizzBuzz</title>
      <Navbar />
      <p id="mainTitle">FizzBuzz Generator</p>
      <hr />
      <h3
        style={{
          textAlign: "center",
          marginTop: 50,
        }}
      >
        Enter either "Fizz", "Buzz", or "FizzBuzz" into the text field below.
      </h3>
      <p
        style={{
          textAlign: "center",
        }}
      >
        If you're unfamiliar with this game, see{" "}
        <a
          href="https://en.wikipedia.org/wiki/Fizz_buzz#:~:text=Fizz%20buzz%20is%20a%20group,with%20the%20word%20%22fizzbuzz%22."
          style={{
            color: "#FA5F55",
            fontWeight: "bold",
          }}
        >
          this link.
        </a>
      </p>

      <Box
        component="form"
        sx={{
          justifyContent: "center",
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
          justifyContent: "center",
          textAlign: "center",
          marginTop: 50,
          marginLeft: 200,
          marginRight: 200,
          paddingBottom: 200,
        }}
      >
        {submittedText}
      </p>
    </>
  );
}

export default FizzBuzz;
