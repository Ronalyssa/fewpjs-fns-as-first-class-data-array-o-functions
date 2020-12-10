function wakeDog(dogName, dogBreed) {
    console.log("Wake ${dogName} the ${dogBreed}");
    return `Wake ${dogName} the ${dogBreed}`
  }

  function leashDog() {
    console.log("Leash ${dogName} the ${dogBreed}");
    return `Leash ${dogName} the ${dogBreed}`
  }

  function walkToPark() {
    console.log("Walk to the park with ${dogName} the ${dogBreed}");
    return `Walk to the park with ${dogName} the ${dogBreed}`
  }

  function throwFrisbee() {
    console.log("Throw the frisbee for ${dogName} the ${dogBreed}");
    return `Throw the frisbee for ${dogName} the ${dogBreed}`
  }

  function walkHome() {
    console.log("Walk home with ${dogName} the ${dogBreed}");
    return `Walk home with ${dogName} the ${dogBreed}`
  }

  function unleashDog() {
    console.log("Unleash ${dogName} the ${dogBreed}");
    return `Unleash ${dogName} the ${dogBreed}`
  }

  const routine = [wakeDog, leashDog, walkToPark, throwFrisbee, walkHome, unleashDog]

//   function exerciseDog(dogName, dogBreed) {
//       array = []
//       for (let i = 0; i < routine.length; i++) {
//           routine[i]
//       }
//       array.push()
//   }

function exerciseDog(dogName, dogBreed) {
    return routine.map(fn => fn(dogName, dogBreed))
}