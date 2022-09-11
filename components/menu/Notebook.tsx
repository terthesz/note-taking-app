import { useEffect, useState } from 'react';
import NotebookType from '../../types/notebook';
import raw_colours from '../../misc/colours.json';

const Notebook = ({ notebook }: { notebook: NotebookType }) => {
  const [colours, setColours] = useState<Array<string>>(new Array<string>());

  useEffect(() => {
    const raw_colour = raw_colours[notebook.colour];
    if (!raw_colour)
      throw new Error(`Colour ${notebook.colour} could not be found!`);

    setColours([
      `hsl(${raw_colour.Hue}, ${raw_colour.Saturation}%, 70%)`,
      `hsl(${raw_colour.Hue}, ${raw_colour.Saturation}%, 60%)`,
      `hsl(${raw_colour.Hue}, ${raw_colour.Saturation}%, 35%)`,
    ]);

    console.log(colours);
  }, []);

  return (
    <div
      className='relative w-full h-[8rem] rounded-lg text-white px-5 py-4'
      style={{ backgroundColor: colours[0] }}
    >
      <h1 className='font-extrabold text-2xl tracking-[.2rem]'>
        {notebook.name.toUpperCase()}
      </h1>

      <div
        className='absolute top-[.5rem] right-[.6rem] rounded-md min-w-[3.5rem] text-center'
        style={{ backgroundColor: colours[1], color: colours[2] }}
      >
        <p className='px-3 font-semibold'>
          {notebook.subject.toLocaleLowerCase()}
        </p>
      </div>
    </div>
  );
};

export default Notebook;
