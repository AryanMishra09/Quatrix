'use client'
import { useRouter } from "next/navigation";
import UploadCareButton from "./uploadcare-button";
import Image from "next/image";
import { Button } from "@/components/ui/button";
import { X } from "lucide-react";

type Props = {
    userImage : string | null
    onDelete?: any
    onUpload?: any
};

const ProfilePicture = ({userImage, onDelete, onUpload} : Props) => {
    const router = useRouter();

    const onRemoveProfileImage = async () => {
        const response = await onDelete();
        if(response){
            router.refresh();
        }
    }
    return (
        <div className="flex flex-col">
            <p className="text-lg text-white">
                Profile Picture
            </p>
            <div className="flex h-[25vh] w-[20vh] flex-col items-start justify-start">
                {userImage ? (
                    <>
                        <div className="relative h-full w-full rounded-xl mt-4">
                            <Image 
                                src={userImage}
                                alt="User_Image"
                                fill 
                                className="rounded-xl h-full w-full object-center"
                            />
                        </div>
                        <Button
                            onClick={onRemoveProfileImage}
                            className="bg-transparent text-white/70 hover:bg-transparent hover:text-white"
                        >
                            <X /> Remove Logo 
                        </Button>
                    </>
                ) : (
                    <div className="my-auto mx-auto">
                        <UploadCareButton onUpload={onUpload} />
                    </div>
                )}
                
            </div>
        </div>
    )
}

export default ProfilePicture;