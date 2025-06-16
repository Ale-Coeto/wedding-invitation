import React from "react";

const WeekPage = ({ params }: { params: Promise<{ id: string }> }) => {
  const { id } = React.use(params);

  return (
    <div>
      {id}
    </div>
  );
};

export default WeekPage;