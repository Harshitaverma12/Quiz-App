import React, { useState } from "react";
import Typography from "@mui/material/Typography";
import { Accordion, AccordionSummary, AccordionDetails } from "@mui/material";

function QandA() {
  const [expanded, setExpanded] = useState(null);

  const questions = [
    {
      id: "1",
      question: "What is the capital of France?",
      options: ["Paris", "London", "Berlin", "Rome"],
      answer: "Paris",
    },
    {
      id: "2",
      question: "Which planet is known as the Red Planet?",
      options: ["Mars", "Venus", "Jupiter", "Mercury"],
      answer: "Mars",
    },
    {
      id: "3",
      question: "What is the largest ocean on Earth?",
      options: [
        "Pacific Ocean",
        "Atlantic Ocean",
        "Indian Ocean",
        "Arctic Ocean",
      ],
      answer: "Pacific Ocean",
    },
  ];

  const handleChange = (panel) => (event, newExpanded) => {
    setExpanded(newExpanded ? panel : false);
  };

  return (
    <div style={{ background: "white" }}>
      {questions.map((q) => (
        <Accordion
          key={q.id}
          expanded={expanded === q.id}
          onChange={handleChange(q.id)}
          style={{ marginTop: "1rem", marginBottom: "1rem" }}
        >
          <AccordionSummary
            aria-controls={`${q.id}-content`}
            id={`${q.id}-header`}
          >
            <Typography>{q.question}</Typography>
          </AccordionSummary>
          <AccordionDetails>
            <div>
              {q.options.map((option) => (
                <Typography key={option}>{option}</Typography>
              ))}
              <Typography>Correct Answer: {q.answer}</Typography>
            </div>
          </AccordionDetails>
        </Accordion>
      ))}
    </div>
  );
}

export default QandA;
