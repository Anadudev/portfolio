import React from "react";
import Editor from "@monaco-editor/react";

const code = `/**
 * Quicksort implementation using the Hoare Partition Scheme (In-Place)
 * @param {Array<number>} arr - The array to be sorted
 * @param {number} low - Starting index of the array/sub-array
 * @param {number} high - Ending index of the array/sub-array
 */
function quicksortInPlace(arr, low = 0, high = arr.length - 1) {
    if (low < high) {
        // Partition the array and get the pivot index
        const pivotIndex = partition(arr, low, high);

        // Recursively sort the elements before the pivot
        quicksortInPlace(arr, low, pivotIndex);

        // Recursively sort the elements after the pivot
        quicksortInPlace(arr, pivotIndex + 1, high);
    }
    return arr;
}

// Helper function to swap two elements in an array
function swap(arr, i, j) {
    [arr[i], arr[j]] = [arr[j], arr[i]];
}

// Hoare Partition Scheme
function partition(arr, low, high) {
    // Choose the middle element as the pivot for simplicity
    const pivot = arr[Math.floor((low + high) / 2)]; 
    let i = low - 1; 
    let j = high + 1;

    while (true) {
        // Find element on the left side that is >= pivot
        do {
            i++;
        } while (arr[i] < pivot);

        // Find element on the right side that is <= pivot
        do {
            j--;
        } while (arr[j] > pivot);

        // If the indices have crossed, the array is partitioned
        if (i >= j) {
            return j;
        }

        // Swap the elements to put them on the correct side
        swap(arr, i, j);
    }
}

const unsortedArrayInPlace = [10, 5, 2, 3, 9, 8, 4, 1, 7, 6];

quicksortInPlace(unsortedArrayInPlace);

console.log(unsortedArrayInPlace); // Output: [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]
`;

const TYPING_SPEED_MS = 20; // Set to 1000 for 1 sec/char (very slow!)
const RESTART_DELAY_MS = 60000; // 1 minute

const IdeEditor = () => {
  const [displayedCode, setDisplayedCode] = React.useState("");

  React.useEffect(() => {
    let timeoutId: NodeJS.Timeout;
    let charIndex = 0;

    const typeChar = () => {
      if (charIndex < code.length) {
        setDisplayedCode(code.slice(0, charIndex + 1));
        charIndex++;
        timeoutId = setTimeout(typeChar, TYPING_SPEED_MS);
      } else {
        // Finished typing, wait before restart
        timeoutId = setTimeout(() => {
          setDisplayedCode("");
          charIndex = 0;
          typeChar();
        }, RESTART_DELAY_MS);
      }
    };

    // Start typing
    typeChar();

    return () => clearTimeout(timeoutId);
  }, []);

  return (
    <Editor
      height="80vh"
      defaultLanguage="javascript"
      value={displayedCode}
      theme="vs-dark"
      options={{
        minimap: { enabled: false },
        readOnly: true, // Prevent user editing during animation
      }}
    />
  );
};

export default IdeEditor;
