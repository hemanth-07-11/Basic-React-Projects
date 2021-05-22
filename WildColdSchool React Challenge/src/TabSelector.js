import React from 'react';

function TabSelector({ id, handleChangeTab, activeId, onglet }) {
  return (
    <div>
      <button id={id} onClick={handleChangeTab} className={activeId}>
        {onglet}
      </button>
    </div>
  );
}

export default TabSelector;