import './App.css';
import Content from './Content';
import Header from './Header';
import AddItem from './AddItem';
import Footer from './Footer';
import { useEffect, useState } from 'react';
import SearchItem from './SearchItem';



function App() {
//  const Api_Url = 'http://localhost:3500/items';
 

  const [items, setItems] = useState(JSON.parse(localStorage.getItem('ShoppingList')) || []);
  const [newItem , setNewItem] = useState('');
  const [search , setSearch] = useState('')
  // const [fetchError, setFetchError] = useState(null);
  // const [isLoading , setIsLoading ] = useState(true);


  useEffect(()=>{
   localStorage.setItem('shoppinglist',JSON.stringify(items));  
  },[items])



 const addItem = (item)=>{
  const id = items.length ? items[items.length-1].id + 1 : 1;
  const myNewItem = {id , checked: false, item}
  const listItems = [...items , myNewItem];
  setItems(listItems)
 }
 
 const handleChecked = (id)=>{
    const listItems = items.map((item)=> item.id === id ? {...item,
       checked : !item.checked } : item); 
    setItems(listItems);
 }
 const handleDelete = (id)=>{
        const listItems = items.filter((item)=>
        item.id !== id );
        setItems(listItems);
 }

 const handleSubmit = (e)=>{
            e.preventDefault();
            if(!newItem) return ;
            //  add Item
            addItem(newItem)
            setNewItem('');

 }

  return (
    <div className="App">
      <Header 
      title = 'Groceries List'/>
      <AddItem 
      newItem = {newItem}
      setNewItem = {setNewItem}
      handleSubmit = {handleSubmit}/>

      <SearchItem
      search = {search}
      setSearch = {setSearch}/>
      
      <main>
     <Content 
     items = {items.filter(item => ((item.item).toLowerCase()).includes(search.toLowerCase()))} 
    handleChecked = {handleChecked}
    handleDelete = {handleDelete}  />
     </main>
     <Footer length = {items.length}  />
    </div>
  );
}

export default App;
