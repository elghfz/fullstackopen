import { useState } from 'react'

//components
const Title = (props) => <h1>{props.text}</h1>

const Button = ({onClick, text }) => {
  return (
    <button onClick={onClick}>{text}</button>
  )
} 

//////////////////////////////
//        Step1             //
//////////////////////////////

/*

const App = () => {
  // save clicks of each button to its own state
  const [good, setGood] = useState(0)
  const [neutral, setNeutral] = useState(0)
  const [bad, setBad] = useState(0)

  // event handlers, NOT COMPONENTS
  const handleGood = () => {
    setGood(good + 1)
  }
  const handleNeutral = () => {
    setNeutral(neutral + 1)
  }
  const handleBad = () => {
    setBad(bad + 1)
  }

  return (
    <div>
      <Title text="What's your feedback?" />
      <Button onClick={handleGood} text="Good" />
      <Button onClick={handleNeutral} text="Neutral" />
      <Button onClick={handleBad} text="Bad" />
      <Title text="Statistics" />
      <p>Good: {good}</p>
      <p>Neutral: {neutral}</p>
      <p>Bad: {bad}</p>
    </div>
  )
}
*/

//////////////////////////////
//        Step2             //
//////////////////////////////

/*
const App = () => {
  // save clicks of each button to its own state
  const [good, setGood] = useState(0)
  const [neutral, setNeutral] = useState(0)
  const [bad, setBad] = useState(0)

  // faster syntax
  const handleGood = () => setGood(good + 1)
  const handleNeutral = () => setNeutral(neutral + 1)
  const handleBad = () => setBad(bad + 1)

  return (
    <div>
      <Title text="What's your feedback?" />
      <Button onClick={handleGood} text="Good" />
      <Button onClick={handleNeutral} text="Neutral" />
      <Button onClick={handleBad} text="Bad" />
      <Title text="Statistics" />
      <p>Good: {good}</p>
      <p>Neutral: {neutral}</p>
      <p>Bad: {bad}</p>
      <p>Total: {good + neutral + bad}</p>
      <p>Average: {(good - bad) / (good + neutral + bad)}</p>
      <p>Positive: {(good / (good + neutral + bad)) * 100} %</p>
    </div>
  )
}
*/

//////////////////////////////
//        Step3             //
//////////////////////////////
/*
// new statistics component
const Statistics = ({good, neutral, bad}) => { 
                    //instead of props and then props.good ...
  return (
    <>
      <Title text="Statistics" />
      <p>Good: {good}</p>
      <p>Neutral: {neutral}</p>
      <p>Bad: {bad}</p>
      <p>Total: {good + neutral + bad}</p>
      <p>Average: {(good - bad) / (good + neutral + bad)}</p>
      <p>Positive: {(good / (good + neutral + bad)) * 100} %</p>
    </>
)
}

const App = () => {
  // save clicks of each button to its own state
  const [good, setGood] = useState(0)
  const [neutral, setNeutral] = useState(0)
  const [bad, setBad] = useState(0)

  const handleGood = () => setGood(good + 1)
  const handleNeutral = () => setNeutral(neutral + 1)
  const handleBad = () => setBad(bad + 1)

  return (
    <div>
      <Title text="What's your feedback?" />
      <Button onClick={handleGood} text="Good" />
      <Button onClick={handleNeutral} text="Neutral" />
      <Button onClick={handleBad} text="Bad" />
      <Statistics good={good} neutral={neutral} bad={bad} />
    </div>
  )
}
*/

//////////////////////////////
//        Step4             //
//////////////////////////////

/*
const Statistics = ({good, neutral, bad}) => { 
  if (good === 0 && neutral === 0 && bad === 0) {
    return (
      <>
        <Title text="Statistics" />
        <p>No feedback yet!</p>
      </>
    )
  }
  return (
    <>
      <Title text="Statistics" />
      <p>Good: {good}</p>
      <p>Neutral: {neutral}</p>
      <p>Bad: {bad}</p>
      <p>Total: {good + neutral + bad}</p>
      <p>Average: {(good - bad) / (good + neutral + bad)}</p>
      <p>Positive: {(good / (good + neutral + bad)) * 100} %</p>
    </>
    )
}

const App = () => {

const [good, setGood] = useState(0)
const [neutral, setNeutral] = useState(0)
const [bad, setBad] = useState(0)

const handleGood = () => setGood(good + 1)
const handleNeutral = () => setNeutral(neutral + 1)
const handleBad = () => setBad(bad + 1)

return (
  <div>
    <Title text="What's your feedback?" />
    <Button onClick={handleGood} text="Good" />
    <Button onClick={handleNeutral} text="Neutral" />
    <Button onClick={handleBad} text="Bad" />
    <Statistics good={good} neutral={neutral} bad={bad} />
  </div>
  )
}
*/

//////////////////////////////
//        Step5             //
//////////////////////////////

/*
const StatisticLine = ({text, value}) => {
  return (
    <p>{text}: {value}</p>
  )
}
const Statistics = ({good, neutral, bad}) => { 
  if (good === 0 && neutral === 0 && bad === 0) {
    return (
      <>
        <Title text="Statistics" />
        <p>No feedback yet!</p>
      </>
    )
  }
  return (
    <>
      <Title text="Statistics" />
      <StatisticLine text="Good" value={good} />
      <StatisticLine text="Neutral" value={neutral} />
      <StatisticLine text="Bad" value={bad} />
      <StatisticLine text="Total" value={good + neutral + bad} />
      <StatisticLine text="Average" value={(good - bad) / (good + neutral + bad)} />
      <StatisticLine text="Positive" value={(good / (good + neutral + bad)) * 100 + " %"} />
    </>
    )
}

const App = () => {

const [good, setGood] = useState(0)
const [neutral, setNeutral] = useState(0)
const [bad, setBad] = useState(0)

const handleGood = () => setGood(good + 1)
const handleNeutral = () => setNeutral(neutral + 1)
const handleBad = () => setBad(bad + 1)

return (
  <div>
    <Title text="What's your feedback?" />
    <Button onClick={handleGood} text="Good" />
    <Button onClick={handleNeutral} text="Neutral" />
    <Button onClick={handleBad} text="Bad" />
    <Statistics good={good} neutral={neutral} bad={bad} />
  </div>
  )
}
*/

//////////////////////////////
//        Step6             //
//////////////////////////////

const StatisticLine = ({text, value}) => {
  return (
    <tr>
      <td>{text}</td>
      <td>{value}</td>
    </tr>
  )
}
const Statistics = ({good, neutral, bad}) => { 
  if (good === 0 && neutral === 0 && bad === 0) {
    return (
      <>
        <Title text="Statistics" />
        <p>No feedback yet!</p>
      </>
    )
  }
  return (
    <>
      <Title text="Statistics" />
      <table>
        <tbody>
          <StatisticLine text="Good" value={good} />
          <StatisticLine text="Neutral" value={neutral} />
          <StatisticLine text="Bad" value={bad} />
          <StatisticLine text="Total" value={good + neutral + bad} />
          <StatisticLine text="Average" value={(good - bad) / (good + neutral + bad)} />
          <StatisticLine text="Positive" value={(good / (good + neutral + bad)) * 100 + " %"} />
        </tbody>
      </table>
    </>
    )
}

const App = () => {

const [good, setGood] = useState(0)
const [neutral, setNeutral] = useState(0)
const [bad, setBad] = useState(0)

const handleGood = () => setGood(good + 1)
const handleNeutral = () => setNeutral(neutral + 1)
const handleBad = () => setBad(bad + 1)

return (
  <div>
    <Title text="What's your feedback?" />
    <Button onClick={handleGood} text="Good" />
    <Button onClick={handleNeutral} text="Neutral" />
    <Button onClick={handleBad} text="Bad" />
    <Statistics good={good} neutral={neutral} bad={bad} />
  </div>
  )
}

export default App
