import React from "react";
import { Dropdown } from "react-bootstrap";

function dropBox({ title, options }) {
  return (
    <Dropdown>
      <Dropdown.Toggle variant="success">{title}</Dropdown.Toggle>

      <Dropdown.Menu>
        <div className="flex">
          {options.map((option, index) => (
            <Dropdown.Item key={index}>{option}</Dropdown.Item>
          ))}
        </div>
      </Dropdown.Menu>
    </Dropdown>
  );
}

export default dropBox;
