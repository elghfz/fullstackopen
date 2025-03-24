import { useState } from 'react'

const Title = (props) => <h1>{props.text}</h1>

const Button = ({onClick, text }) => {
  return (
    <button onClick={onClick}>{text}</button>
  )
} 

const App = () => {
  const anecdotes = [
    'If it hurts, do it more often.',
    'Adding manpower to a late software project makes it later!',
    'The first 90 percent of the code accounts for the first 90 percent of the development time...The remaining 10 percent of the code accounts for the other 90 percent of the development time.',
    'Any fool can write code that a computer can understand. Good programmers write code that humans can understand.',
    'Premature optimization is the root of all evil.',
    'Debugging is twice as hard as writing the code in the first place. Therefore, if you write the code as cleverly as possible, you are, by definition, not smart enough to debug it.',
    'Programming without an extremely heavy use of console.log is same as if a doctor would refuse to use x-rays or blood tests when diagnosing patients.',
    'The only way to go fast, is to go well.'
  ]
   
  const [selected, setSelected] = useState(0)
  // using this : Math. floor(Math. random() * (max – min + 1) + min), with the size of the array
  const nextAnecdote = () => {
    setSelected(Math.floor(Math.random() * anecdotes.length))
  }

  const [votes, setVotes] = useState([0, 0, 0, 0, 0, 0, 0, 0])

  const vote = () => {
    const copy = [...votes]
    copy[selected] += 1
    setVotes(copy)
  }

  return (
    <div>
      <Title text="Anecdote of the day :" />
      <br />
      {anecdotes[selected]}<br />
      <p>Voted for {votes[selected]} times</p>
      <br />
      <Button onClick={nextAnecdote} text="Next anecdote!" />
      <Button onClick={vote} text="Vote" />
      <Title text="Anecdote with most votes :" />
      <br />
       {anecdotes[votes.indexOf(Math.max(...votes))]} {/*copied here again just in case! */}
      <p>Voted for {Math.max(...votes)} times!</p>
    </div>
  )
}

export default App