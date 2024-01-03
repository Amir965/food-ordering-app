/* eslint-disable react-hooks/exhaustive-deps */
"use client";
import { useProfile } from "@/components/UseProfile";
import UserForm from "@/components/layout/UserForm";
import UserTabs from "@/components/layout/UserTabs";
import { useParams } from "next/navigation";
import { useState, useEffect } from "react";
import toast from "react-hot-toast";

const EditUserPage = () => {
  const { loading, data } = useProfile();
  const [user, setUser] = useState(null);
  const { id } = useParams();

  useEffect(() => {
    fetch("/api/profile?_id=" + id).then((res) => {
      res.json().then((user) => {
        setUser(user);
      });
    });
  }, []);

  const handleSaveButtonClick = async (e, data) => {
    e.preventDefault();
    const promise = new Promise(async (resolve, reject) => {
      const res = await fetch("/api/profile", {
        method: "PUT",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ ...data, _id: id }),
      });
      if (res.ok) resolve();
      else reject();
    });
    await toast.promise(promise, {
      loading: "Saving user...",
      success: "User saved",
      error: "An error has occurred while saving the user",
    });
  };

  if (loading) {
    return (
      <div className="flex justify-center mt-10">Loading user profile...</div>
    );
  }
  if (!data.admin) {
    return "Not an admin";
  }
  return (
    <section className="mt-8 mx-auto max-w-2xl">
      <UserTabs isAdmin={true} />
      <div className="mt-8">
        <UserForm user={user} onSave={handleSaveButtonClick} />
      </div>
    </section>
  );
};

export default EditUserPage;
