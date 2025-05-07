// TODO: Create an interface for the Candidate objects returned by the API
interface Candidate {
    readonly name: string | null, 
    readonly username: string, 
    readonly location: string | null, 
    readonly avatar: string | undefined, 
    readonly email: string | null, 
    readonly company: string | null,
    readonly bio: string | null
}

export default Candidate;