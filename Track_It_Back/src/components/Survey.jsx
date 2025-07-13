import Gauges from "./DemoGauges";
import { useState, useEffect } from "react";

export default function Survey() {
  const [showSurvey, setShowSurvey] = useState(false);
  const [surveyComplete, setSurveyComplete] = useState(false)

  const [formData, setFormData] = useState({
    name: "",
    exerciseCount: 0,
    bingeWatchCount: 0,
    deepWorkCount: 0,
    socialMediaHours: 0,
    musicCount: 0,
    gameHours:  0,
    junkCount: 0,
    doomHours: 0,
    gambleCount: 0,
    positiveScore: 0,
    negativeScore: 0,
    completed: false
  });
  const [positiveValue, setPositiveValue] = useState(0);
  const [negativeValue, setNegativeValue] = useState(0);

  console.log(formData.exerciseCount * 2);
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  function handleSubmit(e) {
    e.preventDefault()

    const positiveScore =
    Number(formData.exerciseCount) * 3 +
    Number(formData.deepWorkCount) * 5 +
    Number(formData.musicCount);

    const negativeScore =
    Number(formData.bingeWatchCount) +
    Number(formData.socialMediaHours) +
    Number(formData.gameHours) * 2 +
    Number(formData.junkCount) * 2 +
    Number(formData.doomHours) * 3 +
    Number(formData.gambleCount) * 7;

    const updatedForm = {
      ...formData,
      positiveScore: positiveScore *1.5,
      negativeScore: negativeScore,
      completed: true
    }

    setPositiveValue(positiveScore*1.5)
    setNegativeValue(negativeScore)
    setFormData(updatedForm)

    localStorage.setItem("surveyData", JSON.stringify(updatedForm));
    setShowSurvey(false)
    setSurveyComplete(true)
    window.scrollTo({ top: 0, behavior: "smooth" });

  }

useEffect(() => {
  const storedData = localStorage.getItem("surveyData");

  if (storedData) {
    
    const parsed = JSON.parse(storedData);

    setFormData(parsed);
    setPositiveValue(parsed.positiveScore || 0);
    setNegativeValue(parsed.negativeScore || 0);
    setSurveyComplete(true);
  }
}, []);

  const [breakdown, setBreakdown] = useState(false)


  return (
    <div className={`${showSurvey ? "" : "h-[85vh]"}`}>
      <Gauges valueOne={negativeValue} valueTwo={positiveValue} />
      <div className={`${surveyComplete ? "" : "hidden"} flex justify-around`}>
        <button className="text-lg mt-4 underline hover:cursor-pointer" onClick={()=>setBreakdown(!breakdown)}>Click to toggle breakdown</button>
      </div>
      <div className={`${breakdown ? "" : "hidden"} flex justify-around`}>
        <div>
          <h2 className="text-2xl mb-2">Overload score breakdown</h2>
          <ul className="list-none">
            <li className="text-xl mb-1">Binge watch count: {formData.bingeWatchCount}    </li>
            <li className="text-xl mb-1">Social media hours: {formData.socialMediaHours}</li>
            <li className="text-xl mb-1">Video game hours: {formData.gameHours}</li>
            <li className="text-xl mb-1">Junk food count: {formData.junkCount}</li>
            <li className="text-xl mb-1">Doom scrolling hours: {formData.doomHours}</li>
            <li className="text-xl mb-1">Gambling and sports betting count: {formData.gambleCount}</li>
          </ul>
        </div>
        <div className={`!posBreakdown ? "opacity-0"`}>
          <h2 className="text-2xl mb-2">Overload score breakdown</h2>
          <ul className="list-none">
            <li className="text-xl mb-1">Exercise count: {formData.exerciseCount}</li>
            <li className="text-xl mb-1">Deep work count: {formData.deepWorkCount}</li>
            <li className="text-xl mb-1">Music count: {formData.musicCount}</li>
            <li></li>
            <li></li>
            <li></li>
          </ul>
        </div>
      </div>
      <div className={`flex flex-col text-center mt-16 ${showSurvey ? "h-[115vh]" : ""}`}>
        <div className={`${surveyComplete ? "hidden" : ""}`}>
          <p className="text-2xl">
            Take the survey to calculate your score for each category. The
            survey should take less than 5 minutes
          </p>
          <button
            className="text-xl mt-4 p-2 border-[1px] border-black rounded-md hover:cursor-pointer"
            onClick={() => setShowSurvey(!showSurvey)}
          >
            Take the survey
          </button>
        </div>
        <div id="survey" className={`${showSurvey ? "mb-16" : "hidden"} mt-16`}>
          <h2 className="text-3xl font-semibold mb-4">Survey</h2>
          <form onSubmit={handleSubmit} className="space-y-4">
            <div className="flex flex-col items-center">
              <label className="mb-2 font-medium text-lg">Name</label>
              <input
                name="name"
                type="text"
                value={formData.name}
                onChange={handleChange}
                placeholder="Ex. Ethan Tran"
                className="w-[50vw] border border-black rounded-md px-3 py-2"
                required
              />
            </div>
            <div className="flex flex-col items-center">
              <label className="mb-2 font-medium text-lg">
                How many times have you engaged in physical exercise in the past
                week? (ex. walking, running, weight lifting)
              </label>
              <input
                name="exerciseCount"
                type="number"
                value={formData.exerciseCount}
                onChange={(e) =>
                  setFormData((prev) => ({
                    ...prev,
                    exerciseCount: e.target.value,
                  }))
                }
                className="w-[50vw] border border-black rounded-md px-3 py-2"
                required
              />
            </div>
            <div className="flex flex-col items-center">
              <label className="mb-2 font-medium text-lg">
                How many times have you binge watched television shows in the
                past week?
              </label>
              <input
                name="bingeWatchCount"
                type="number"
                value={formData.bingeWatchCount}
                onChange={(e) =>
                  setFormData((prev) => ({
                    ...prev,
                    bingeWatchCount: e.target.value,
                  }))
                }
                className="w-[50vw] border border-black rounded-md px-3 py-2"
                required
              />
            </div>
            <div className="flex flex-col items-center">
              <label className="mb-2 font-medium text-lg">
                How many times have you engaged deep work in the past week? (ex.
                complete focus on certain tasks or projects)
              </label>
              <input
                name="deepWorkCount"
                type="number"
                value={formData.deepWorkCount}
                onChange={(e) =>
                  setFormData((prev) => ({
                    ...prev,
                    deepWorkCount: e.target.value,
                  }))
                }
                className="w-[50vw] border border-black rounded-md px-3 py-2"
                required
              />
            </div>
            <div className="flex flex-col items-center">
              <label className="mb-2 font-medium text-lg">
                How many hours of social media did you have in the past week?
                (Not including doom scrolling)
              </label>
              <input
                name="socialMediaHours"
                type="number"
                value={formData.socialMediaHours}
                onChange={(e) =>
                  setFormData((prev) => ({
                    ...prev,
                    socialMediaHours: e.target.value,
                  }))
                }
                className="w-[50vw] border border-black rounded-md px-3 py-2"
                required
              />
            </div>
            <div className="flex flex-col items-center">
              <label className="mb-2 font-medium text-lg">
                How many times have you solely listened to music in the past
                week? (ex. listening to music without multitasking, only listening to music)
              </label>
              <input
                name="musicCount"
                type="number"
                value={formData.musicCount}
                onChange={(e) =>
                  setFormData((prev) => ({
                    ...prev,
                    musicCount: e.target.value,
                  }))
                }
                className="w-[50vw] border border-black rounded-md px-3 py-2"
                required
              />
            </div>
            <div className="flex flex-col items-center">
              <label className="mb-2 font-medium text-lg">
                How many hours of video games have you played in the past
                week? 
              </label>
              <input
                name="gameHours"
                type="number"
                value={formData.gameHours}
                onChange={(e) =>
                  setFormData((prev) => ({
                    ...prev,
                    gameHours: e.target.value,
                  }))
                }
                className="w-[50vw] border border-black rounded-md px-3 py-2"
                required
              />
            </div>
            <div className="flex flex-col items-center">
              <label className="mb-2 font-medium text-lg">
                How many times have you consumed junk food in the past
                week? 
              </label>
              <input
                name="junkCount"
                type="number"
                value={formData.junkCount}
                onChange={(e) =>
                  setFormData((prev) => ({
                    ...prev,
                    junkCount: e.target.value,
                  }))
                }
                className="w-[50vw] border border-black rounded-md px-3 py-2"
                required
              />
            </div>
            <div className="flex flex-col items-center">
              <label className="mb-2 font-medium text-lg">
                How many hours have you doomscrolled/scrolled this week?
                (ex. scrolling through TikTok, Instagram Reels, Youtube shorts, any shortform content)
              </label>
              <input
                name="doomHours"
                type="number"
                value={formData.doomHours}
                onChange={(e) =>
                  setFormData((prev) => ({
                    ...prev,
                    doomHours: e.target.value,
                  }))
                }
                className="w-[50vw] border border-black rounded-md px-3 py-2"
                required
              />
            </div>
            <div className="flex flex-col items-center">
              <label className="mb-2 font-medium text-lg">
                How many times have you used sports betting apps or have gambled in the past week?
              </label>
              <input
                name="gambleCount"
                type="number"
                value={formData.gambleCount}
                onChange={(e) =>
                  setFormData((prev) => ({
                    ...prev,
                    gambleCount: e.target.value,
                  }))
                }
                className="w-[50vw] border border-black rounded-md px-3 py-2"
                required
              />
            </div>
            <button
              type="submit"
              className="w-[25vw] bg-green-600 text-white py-2 rounded-md hover:bg-green-700"
              onSubmit={()=>handleSubmit()}
            >
              Submit
            </button>
          </form>
        </div>
      </div>
    </ div>
  );
}
