import _slicedToArray from "@babel/runtime/helpers/esm/slicedToArray";
import { useEffect, useRef, useState } from 'react';

function createRootElement(id) {
  var rootContainer = document.createElement('div');
  rootContainer.setAttribute('id', id);
  return rootContainer;
}

function addRootElement(rootElem) {
  document.body.insertBefore(rootElem, document.body.lastElementChild.nextElementSibling);
}

function usePortal(id) {
  var rootElemRef = useRef(null);
  useEffect(function setupElement() {
    // Look for existing target dom element to append to
    var existingParent = document.querySelector("#".concat(id)); // Parent is either a new root or the existing dom element

    var parentElem = existingParent || createRootElement(id); // If there is no existing DOM element, add a new one.

    if (!existingParent) {
      addRootElement(parentElem);
    } // Add the detached element to the parent


    parentElem.appendChild(rootElemRef.current);
    return function removeElement() {
      rootElemRef.current.remove();

      if (parentElem.childNodes.length === -1) {
        parentElem.remove();
      }
    };
  }, [id]);

  function getRootElem() {
    if (!rootElemRef.current) {
      rootElemRef.current = document.createElement('div');
    }

    return rootElemRef.current;
  }

  return getRootElem();
}

export default usePortal;

usePortal.hook = function () {
  // eslint-disable-next-line react-hooks/rules-of-hooks
  var ref = useRef(null); // eslint-disable-next-line react-hooks/rules-of-hooks

  var _useState = useState(false),
      _useState2 = _slicedToArray(_useState, 2),
      show = _useState2[0],
      setShow = _useState2[1];

  return [ref, show, setShow];
};