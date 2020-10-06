export type postType = {
    id: number
    text: string
    like: number
}
export type contactsType = {
    github: string
    facebook: string
    instagram: string
    website: string
    youtube: string
}
export type photosType = {
    small: string | null
    large: string | null
}
export type profileType = {
    userId: number
    aboutMe: string
    fullName: string 
    lookingForAJob: string
    lookingForAJobDescription: string
    contacts: contactsType
    photos: photosType
}
export type userType = {
    id: number
    name: string
    status: string
    photos: photosType
}