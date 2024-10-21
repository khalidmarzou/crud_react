export default function Button({ content, colors }) {
  return <button className={`${colors} px-12 py-2 rounded-md font-extrabold text-xl text-white`}>{content}</button>;
}
