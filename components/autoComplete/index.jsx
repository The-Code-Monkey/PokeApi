import React from 'react';

const autoComplete = props => {
  const {
    options,
    onSelect
  } = props;
  
  const [value, setValue] = React.useState('');
  const [fList, setFList] = React.useState(options);
  
  function onChange(e) {
    setValue(e.target.value);
    const newList = options.filter(poke =>
      poke.name.toLowerCase().includes(
        e.target.value.toLowerCase()
      )
    );
    setFList(newList);
  }
  
  return (
    <div className={"auto-complete-wrapper"}>
      <input id={"poke-search"} placeholder={"Search Pokémon..."} onChange={(e) => onChange(e)} value={value} type={"search"} />
      <div className="auto-complete-options">
        <ul>
        {fList.map((poke, i) => (
          <li onClick={() => {
            onSelect(poke);
          }} key={`${poke.name}-${i}`}>
            {poke.name.substr(0)[0].toUpperCase()}{poke.name.substring(1).toLowerCase()}
          </li>
        ))}
        </ul>
      </div>
    </div>
  )
};

export default autoComplete;
