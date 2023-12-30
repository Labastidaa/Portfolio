import Link from "next/link";
import Image from "next/image";
import { Button } from "./ui/button";

const VimeoVideo = () => {
  return (
    <>
      <Button asChild variant={"default"}>
        <Link href="https://vimeo.com/manage/videos/898797134">
          Overview Video
        </Link>
      </Button>
    </>
  );
};

export default VimeoVideo;
