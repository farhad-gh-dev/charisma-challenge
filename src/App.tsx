import React from "react";
import "./App.css";
import { Header } from "features/Header";
import { UsersList } from "features/UsersList";
import { PostsList } from "features/PostsList";
import { SelectedItemsList } from "features/SelectedItemsList";

const App: React.FC = () => {
  return (
    <div className="App">
      <Header />

      <div className="list">
        <UsersList />

        <PostsList />

        <SelectedItemsList />
      </div>
    </div>
  );
};

export default App;
