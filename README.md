# The game of life challenge / Week 6 Challenge

## Conway Game of Life 🦠 !

The idea is to code a [Conway's Game of Life](https://es.wikipedia.org/wiki/Juego_de_la_vida).

![Game of life demo](https://www.jakubkonka.com/images/gof.gif)

Rule resume:

- A living cell follows the following rules:
  - If it has less than 2 contiguous living cells, it dies from "loneliness".
  - If it has more than 3 contiguous living cells, it dies from "overpopulation".
  - If it has 2 or 3 contiguous living cells, it survives.
- A dead cell follows the following rule: It remains dead until it has exactly 3 living contiguous cells, at which point it is "born".

If you want to test how it works to get an idea, you can try a working version on [this page](https://playgameoflife.com/).

## Mandatory

1. It must be tested with Jest.
   _OPTIONAL: SonarQube or SonarCloud should be used to check the quality of the code._
2. Husky will be used to handle the git-hooks, using the attached files.
   _OPTIONAL: GitActions should be used for the attached workflow._
3. Main should be protected on GitHub so that everything that is merged goes through pull-request and that the workflow is fulfilled.

4. In the case of HTML/CSS.
   4.1. BEM/SASS shall be used.
   4.2. The game shall be deployed to Netlify.

## Milestones

1. Functional programme in JS. Cells are stuck to the wall (they stand still).
2. Program 100% tested.
3. Add HTML/CSS.
4. Modify JS so that:
   a. Cells continue to move forward when they reach the wall and disappear.
   b. Cells exit one side of the grid and appear on the other.

### Some tips from @alce65 before we start

- Think in terms of logic /
- A matrix > array of arrays /
- Put it in HTML for state display /
- More or less complex grid / square-shaped divs that change colour works for us.
- From the dom it reflects us the state of the array painted as we want.
- With display grid...
- When I have everything in JS working... I take it to the HTML...
