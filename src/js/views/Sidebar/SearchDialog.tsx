import React from "react";

import {
  Button,
  Dialog,
  DialogActions,
  DialogContent,
  DialogContentText,
  DialogTitle,
} from "@material-ui/core";

interface Props {
  onClose(): void;
  open: boolean;
}

export default function SearchDialog({ open, onClose }: Props) {
  return (
    <Dialog
      open={open}
      onClose={onClose}
      aria-labelledby="alert-dialog-title"
      aria-describedby="alert-dialog-description"
    >
      <DialogTitle id="alert-dialog-title">
        {`How to search for articles`}
      </DialogTitle>
      <DialogContent>
        <DialogContentText id="alert-dialog-description">
          <p>
            <strong>Search Operators</strong>
          </p>
          <p>The BCKG UI search supports the following operators:</p>
          <ul>
            <li>
              <strong>+</strong> signifies AND operation
            </li>
            <li>
              <strong>|</strong> signifies OR operation
            </li>
            <li>
              <strong>-</strong> negates a single token
            </li>
            <li>
              <strong>"</strong> wraps a number of tokens to signify a phrase
              for searching
            </li>
            <li>
              <strong>*</strong> at the end of a term signifies a prefix query
            </li>
            <li>
              <strong>(</strong> and <strong>)</strong> signify precedence
            </li>
            <li>
              <strong>~N</strong> after a word signifies edit distance
              (fuzziness)
            </li>
            <li>
              <strong>~N</strong> after a phrase signifies slop amount
            </li>
          </ul>
          <p>
            To use one of these characters literally, escape it with a preceding
            backslash (<strong>\</strong>).
            <br />
            The default operator between words is OR
          </p>
          <br />
          <p>
            <strong>Full Search Reference</strong>
          </p>
          <p>
            Under the hood, the system is using the
            <a
              href="https://www.elastic.co/guide/en/elasticsearch/reference/current/query-dsl-simple-query-string-query.html"
              target="_blank"
            >
              {" "}
              Elasticsearch Simple Query String
            </a>
            . See that documentation for the full syntax.
          </p>
        </DialogContentText>
      </DialogContent>
      <DialogActions>
        <Button onClick={onClose} color="primary" autoFocus>
          Gotcha
        </Button>
      </DialogActions>
    </Dialog>
  );
}
