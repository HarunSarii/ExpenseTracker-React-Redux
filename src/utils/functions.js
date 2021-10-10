// import firebase from './firebase'
// import { GlobalContext } from '../context/GlobalState'


// export const addInfo = ({ transactions }) => {
//     const { transactions } = useContext(GlobalContext);

//     const expenseRef = firebase.database().ref('expense')
//     expenseRef.push(transactions)
// }

// export const useFetch = () => {
//     const [contactList, setContactList] = useState();
//     const [isLoading, setİsLoading] = useState(false);

//     useEffect(() => {
//       const expenseRef = firebase.database().ref("expense");
//       expenseRef.on("value", (snapshot) => {
//         const expense = snapshot.val();
//         const expenseArray = [];
//         for (let id in expenses) {
//           expenseArray.push({ id, ...contacts[id] });
//         }
//         setContactList(expenseArray);
//       });
//     }, []);
//     return { contactList, isLoading };
//   };