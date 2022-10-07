# Questions and Answers Tool

## Built with

- React
- TypeScript
- React-Redux
- Redux-Persist
- Styled Components
- Jest

## Functionalities that are completed

- Displays a list with questions
- Answers are hidden and can be shown by clicking on the expand button
- Questions and answers can be created
- Persistance in local storage
- Users can delete questions individually
- All questions can be deleted in bulk
- Questions and answers can be edited
- Questions can be sorted alphabetically

## What could be improved

In a _real case scenario_, several areas could be improved:

- Proper client-side validation
- More unit tests, snapshot and the addition of `a11y` tests
- Workflow configuration
- Linter configuration in CI for `ts` and `css`
- Error handling for all failed user interactions
- UI design
  - It should be fully responsive on mobile
  - Usage of Studocu's brand identity for design
  - Components should be fully styled

## Instructions

1. Clone this repository over SSH or HTTP

```
$ git clone ssh://git@github.com:luciana-mendonca/questions-and-answers-tool.git

```

```
$ git clone https://git@github.com:luciana-mendonca/questions-and-answers-tool.git
```

2. Install its dependencies

```
$ yarn install
```

3. Run the project

```
$ yarn start
```

Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

### Scripts

```
yarn start
```

```
yarn test
```

```
yarn build
```
