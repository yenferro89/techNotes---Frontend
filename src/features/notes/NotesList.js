import { useGetNotesQuery } from "./notesApiSlice";
import Note from "./Note";

const NotesList = () => {
  const {
    data: notes,
    isLoading,
    isSuccess,
    isError,
    error,
  } = useGetNotesQuery();

  let content;

  if (isLoading) content = <p>Loading...</p>;

  if (isError) {
    content = <p className="">{error?.data?.message}</p>;
  }

  if (isSuccess) {
    const { ids } = notes;

    const tableContent = ids?.length
      ? ids.map((noteId) => <Note key={noteId} noteId={noteId} />)
      : null;

    content = (
      <table className="">
        <thead className="">
          <tr>
            <th scope="col" className=" ">
              Status
            </th>
            <th scope="col" className=" ">
              Created
            </th>
            <th scope="col" className=" ">
              Updated
            </th>
            <th scope="col" className=" ">
              Title
            </th>
            <th scope="col" className=" ">
              Owner
            </th>
            <th scope="col" className=" ">
              Edit
            </th>
          </tr>
        </thead>
        <tbody>{tableContent}</tbody>
      </table>
    );
  }

  return content;
};
export default NotesList;
