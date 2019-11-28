Game of life

This is my attempt to replicate the "Game of life", a zero player game. 

HTML, CSS and mainly Javascript was used to develop the game.

To play: 

Download repository files and open game.html file.

Rules are simple:

Click on a grid cell to highlight (create) or undo (kill) a cell. Once you are finished press "ONE CYCLE" or "START" button to see how cells behave. Press "RESET" to reset the game.

Cells behave accordingly:

For a space that is "populated":
    - Each cell with one or no neighbors dies, as if by solitude.
    - Each cell with four or more neighbors dies, as if by overpopulation.
    - Each cell with two or three neighbors survives.
For a space that is "empty" or "unpopulated":
    - Each cell with three neighbors becomes populated.

