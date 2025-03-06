export const Component3 = ({ num, isTrue }) => {
  return (
    <div>
      {num > 20 && (
        <div>
          Lorem ipsum dolor sit amet, consectetur adipisicing elit. Neque
          placeat earum recusandae natus doloribus animi quidem, corporis
          pariatur molestias incidunt.
          {isTrue && (
            <table>
              <thead>
                <th>Id</th>
                <th>Name</th>
              </thead>
              <tbody>
                <td>1</td>
                <td>Test</td>
              </tbody>
            </table>
          )}
        </div>
      )}
    </div>
  );
};
