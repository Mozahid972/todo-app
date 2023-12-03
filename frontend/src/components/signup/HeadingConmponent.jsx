import React from 'react'
export const HeadingConmponent = ({first,second}) => {
  return (
    <div>
      <h1 className="text-center sign-heading">
        {first}
        <br />
        {second}
      </h1>
    </div>
  );
}
