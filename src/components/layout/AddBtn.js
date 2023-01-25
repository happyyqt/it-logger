import React from "react";

const AddBtn = () => {
  return (
    <div class="fixed-action-btn">
      <a
        href="#add-log-modal"
        className="btn-floating btn-large red modal-trigger"
      >
        <i class="large material-icons">add</i>
      </a>
      <ul>
        <li>
          <a href="#tech-list-modal" className="btn-floating red modal-trigger">
            <i class="material-icons">person</i>
          </a>
        </li>
        <li>
          <a
            href="#add-tech-modal"
            className="btn-floating yellow darken-1 modal-trigger"
          >
            <i class="material-icons">person_add</i>
          </a>
        </li>
      </ul>
    </div>
  );
};

export default AddBtn;