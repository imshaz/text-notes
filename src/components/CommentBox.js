import React, { useState } from "react";
import "./CommentBox.css";

function CommentBox(props) {
  const [comment, setComment] = useState("");

  const handleCommentSubmit = (e) => {
    e.preventDefault();

    const { updateCommentList, toggleCommentBox, toggleButtonsGroup } = props;

    if (comment) {
      const uniqueId = Date.now();

      wrapSelectedTextWithId(uniqueId);

      updateCommentList({
        id: uniqueId,
        message: comment,
      });

      toggleButtonsGroup();
      toggleCommentBox();
      reset();
    }
  };

  const handleCommentChange = (e) => {
    setComment(e.target.value);
  };

  const reset = () => {
    setComment("");
  };

  const wrapSelectedTextWithId = (uniqueId) => {
    const markWrapper = document.createElement("mark");
    markWrapper.setAttribute("id", uniqueId);
    props.selectedRange.surroundContents(markWrapper);
  };

  const { hidden } = props;

  return (
    <div hidden={hidden}>
      <form className="comment-box" onSubmit={handleCommentSubmit}>
        <label htmlFor="commentBox" className="visuallyhidden">
          Add your comment
        </label>
        <textarea
          id="commentBox"
          className="comment-box__text-area"
          placeholder="Add your comment"
          onChange={handleCommentChange}
          value={comment}
        ></textarea>
        <button type="submit" className="comment-box__submit-button">
          submit
        </button>
      </form>
    </div>
  );
}

export default CommentBox;
