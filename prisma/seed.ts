import { PrismaClient, Prisma } from "@/app/generated/prisma";

const prisma = new PrismaClient();
const userData: Prisma.UserCreateInput[] = [
    { fullName: 'Boris Ayam', emailAddress: 'email@gmail.com', phoneNumber: '653775159', age: '26'},
    { fullName: 'Ndoh Ayam', emailAddress: 'emadil@gmail.com', phoneNumber: '653775159', age: '25'},
    { fullName: 'Tony Ayam', emailAddress: 'emaifl@gmail.com', phoneNumber: '653775159', age: '4'},
]


export async function main(){
    for( const user of userData){
        await prisma.user.create({data: user })
    }
}
main()