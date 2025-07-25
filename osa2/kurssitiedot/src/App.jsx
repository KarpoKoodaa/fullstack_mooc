const Course = ({ course }) => {
  console.log(course)
  const courseNames = course.map(course => course.name)


  return (
    <>
    
    <Header course={name.name} />
    {/* <Content parts={course.parts} /> */}
    
    </>
  )
}

const Header = (props) => {

  return (
    <>
    <h1>{props.course}</h1>
    </>
  )
}

const Content = (props) => {
  // console.log(props)
  return (
    <p>
      {props.parts[0].name} {props.parts[0].exercises} <br />
      {props.parts[1].name} {props.parts[1].exercises} <br />
      {props.parts[2].name} {props.parts[2].exercises}
    </p>
  )
}


const Total = ({ parts }) => {

  const total = parts.reduce((sum, part) => sum + part.exercises, 0)

  return <p>Number of exercises {total}</p>

}

const App = () => {
  const courses = [
    {
      name: 'Half Stack application development',
      id: 1,
      parts: [
        {
          name: 'Fundamentals of React',
          exercises: 10,
          id: 1
        },
        {
          name: 'Using props to pass data',
          exercises: 7,
          id: 2
        },
        {
          name: 'State of a component',
          exercises: 14,
          id: 3
        },
        {
          name: 'Redux',
          exercises: 11,
          id: 4
        }
      ]
    }, 
    {
      name: 'Node.js',
      id: 2,
      parts: [
        {
          name: 'Routing',
          exercises: 3,
          id: 1
        },
        {
          name: 'Middlewares',
          exercises: 7,
          id: 2
        }
      ]
    }
  ]


  return (
    <div>
      <Course course={courseNames} />
      {/* <Total parts={courses.parts} /> */}

    </div>
  )
}

export default App