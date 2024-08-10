import AnimatedCursor from "react-animated-cursor"

function App() {
  return (
    <>
      <AnimatedCursor
        showSystemCursor={false}
        innerSize={8}
        outerSize={25}
        innerScale={1}
        outerScale={1.5}
        outerAlpha={0}
        outerStyle={{
          border: "3px solid #000",
        }}
        innerStyle={{
          backgroundColor: "#000",
        }}
      />
      <h1>Kai Black | The One and Only 11x Developer</h1>
    </>
  )
}

export default App
