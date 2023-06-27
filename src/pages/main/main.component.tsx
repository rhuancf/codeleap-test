import { CreateNewPost } from "@/components";
import { useLocation } from "wouter";

export default function Main() {
  const [location, setLocation] = useLocation();
  
  return (
    <>
      <CreateNewPost/>
    </>
  );
}
