const Course = () => { return (<h1>Half Stack application development</h1>) }
// didn't work with "course" but i rememebred that it should be "Course" and it worked


//first part

/*

const Part1 = () => { return (<p>Fundamentals of React</p>) }
// worked from the get go :D

const Part2 = (props) => { return (<p>Using props to pass data {props.value} </p>) }

const Part3 = (props) => { return (<p>State of a component {props.value}</p>) }

const Part4 = (props) => { return (<p>Number of exercises {props.value}</p>) }
// that worked too!

const App = () => {
  const exercises1 = 10
  const exercises2 = 7
  const exercises3 = 14

  return (
    <div>
      <Course />
      <Part1 />
      <Part2 value={exercises2} />
      <Part3 value={exercises3} />
      <Part4 value={exercises1 + exercises2 + exercises3} />
    </div>
  )
}

*/

//second part

const Part = (props) => {
  return (
    <p>
      {props.name} {props.exercises}
    </p>
  )
}
//correct on first try :D

const Content = (props) => {
  return (
    <div>
      <Part name={props.parts[0].name} exercises={props.parts[0].exercises} />
      <Part name={props.parts[1].name} exercises={props.parts[1].exercises} />
      <Part name={props.parts[2].name} exercises={props.parts[2].exercises} />
    </div>
  )
}
// got it wrong at first, before i figured out the props here would be an array of duos of names and exercices (ints)

const App = () => {
  const values = [
    { name: 'Fundamentals of React', exercises: 10 },
    { name: 'Using props to pass data', exercises: 7 },
    { name: 'State of a component', exercises: 14 }
  ]

  return (
    <div>
      <Course />
      <Content parts={values} />
    </div>
  )
}

//so here the values array is passed as a prop to the Content component, which then passes it to each Part component
//the first div is in the app component, then every component inside has its own tag (h1 for Course, p for every Part)

export default App