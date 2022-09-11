import { useEffect, useState } from 'react';
import NotebookType from '../../types/notebook';
import Notebook from './Notebook';

const NotebookList = () => {
  const [notebooks, set_notebooks] = useState<Array<NotebookType>>(
    new Array<NotebookType>()
  );

  useEffect(() => {
    set_notebooks([
      {
        name: 'Mat',
        id: '0',
        subject: 'Matematika',
        colour: 'Sandy Brown',
      },
      {
        name: 'Sjl',
        id: '1',
        subject: 'Slovenčina',
        colour: 'French Sky Blue',
      },
    ]);
  }, []);

  return (
    <div className='w-full h-full grid grid-cols-4 grid-flow-row px-[17rem] gap-10 py-10'>
      {notebooks.map((notebook) => {
        return <Notebook key={notebook.id} notebook={notebook} />;
      })}
    </div>
  );
};

export default NotebookList;
