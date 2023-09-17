import React from "react";
import RenderMovies from "./renderMovie";


function Movies() { const movies = [
    {
      title: "Eternal Dreams",
      starRating: "4/5",
      Review: "Eternal Dreams is a visually stunning masterpiece. The cinematography and special effects transport you to a mesmerizing world. While the plot may be a bit convoluted, the strong performances from the cast make it a must-watch for fantasy lovers."
    },
    {
      title: "Lost in Time",
      starRating: "4/5",
      Review: "Lost in Time is a thought-provoking sci-fi thriller that keeps you on the edge of your seat. The intricate time-travel plot is expertly woven, and the lead actor's performance is outstanding. A mind-bending experience!"
    },
    {
      title: "Heartstrings",
      starRating: "5/5",
      Review: "Heartstrings is a heartwarming romance that will leave you in tears of joy. The chemistry between the leads is electric, and the soundtrack is simply enchanting. A true cinematic gem."
    },
    {
      title: "The Enigma Code",
      starRating: "3/5",
      Review: "The Enigma Code offers an intriguing mystery, but it falls short in its execution. While the lead actor shines, the plot lacks depth, and the resolution leaves much to be desired."
    },
    {
      title: "Rogue Skies",
      starRating: "4/5",
      Review: "Rogue Skies is a thrilling action-packed adventure with breathtaking aerial sequences. The storyline is engaging, and the CGI is top-notch. A rollercoaster ride for adrenaline junkies!"
    },
    {
      title: "Whispers in the Dark",
      starRating: "3/5",
      Review: "Whispers in the Dark has a promising premise but falters in its execution. The horror elements are spooky, but the plot lacks coherence, leaving viewers with more questions than answers."
    },
    {
      title: "The Art of Deception",
      starRating: "5/5",
      Review: "The Art of Deception is a brilliantly crafted thriller that keeps you guessing until the very end. The intricate plot, coupled with outstanding performances, makes it a must-see for fans of the genre."
    },
    {
      title: "Cats and Canines",
      starRating: "3/5",
      Review: "Cats and Canines is a lighthearted family comedy with its share of laughs. While the slapstick humor works, the plot is predictable, making it a decent choice for a lazy afternoon."
    },
    {
      title: "Infinite Horizon",
      starRating: "5/5",
      Review: "Infinite Horizon is a mind-bending sci-fi epic that challenges the boundaries of imagination. The stunning visuals and thought-provoking narrative make it a cinematic triumph."
    },
    {
      title: "Mystic Memories",
      starRating: "4/5",
      Review: "Mystic Memories is a beautifully crafted drama that explores the depths of human emotions. The poignant storytelling and stellar performances make it a touching and memorable experience."
    }
  ];
return <RenderMovies movies = {movies}/>;


}

export default Movies;