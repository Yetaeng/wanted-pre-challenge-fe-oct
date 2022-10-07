import React from 'react';

const Root = () => {
  // 호출 확인
  window.onpopstate = function(e) { 
    console.log(`${JSON.stringify(e.state)} | ${location.origin} | ${location.pathname}`);
  }

  return (
    <>
      <h1>Root</h1>
      <button onClick={() => useRouter(1, '/about')}>go to about</button>
    </>
  )
}

export default Root;

// Hook
export function useRouter(pageId, pathname) {
  let state = { pageId };
  let url = location.origin + pathname;

  history.pushState(state, '', url);
  history.go();
}