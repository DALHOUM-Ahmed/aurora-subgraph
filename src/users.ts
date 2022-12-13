import {
  AddTag as AddTagEvent,
  Follow as FollowEvent,
  SetBio as SetBioEvent,
  SetDateOfBirth as SetDateOfBirthEvent,
  SetDiscord as SetDiscordEvent,
  SetEmail as SetEmailEvent,
  SetEmailVerifiedData as SetEmailVerifiedDataEvent,
  SetFingerScan as SetFingerScanEvent,
  SetFirstName as SetFirstNameEvent,
  SetGovID as SetGovIDEvent,
  SetInstagram as SetInstagramEvent,
  SetLastName as SetLastNameEvent,
  SetMiddleName as SetMiddleNameEvent,
  SetPictureNFT as SetPictureNFTEvent,
  SetPictureUpload as SetPictureUploadEvent,
  SetTelephone as SetTelephoneEvent,
  SetTelephoneVerifiedData as SetTelephoneVerifiedDataEvent,
  SetTiktok as SetTiktokEvent,
  SetTwitter as SetTwitterEvent,
  SetUsername as SetUsernameEvent,
  SignupBasic as SignupBasicEvent,
  SignupProfileInfo as SignupProfileInfoEvent,
  UnFollow as UnFollowEvent
} from "../generated/users/users"
import {
  AddTag,
  Follow,
  SetBio,
  SetDateOfBirth,
  SetDiscord,
  SetEmail,
  SetEmailVerifiedData,
  SetFingerScan,
  SetFirstName,
  SetGovID,
  SetInstagram,
  SetLastName,
  SetMiddleName,
  SetPictureNFT,
  SetPictureUpload,
  SetTelephone,
  SetTelephoneVerifiedData,
  SetTiktok,
  SetTwitter,
  SetUsername,
  SignupBasic,
  SignupProfileInfo,
  UnFollow
} from "../generated/schema"

export function handleAddTag(event: AddTagEvent): void {
  let entity = new AddTag(
    event.transaction.hash.concatI32(event.logIndex.toI32())
  )
  entity.userId = event.params.userId
  entity.tag = event.params.tag

  entity.blockNumber = event.block.number
  entity.blockTimestamp = event.block.timestamp
  entity.transactionHash = event.transaction.hash

  entity.save()
}

export function handleFollow(event: FollowEvent): void {
  let entity = new Follow(
    event.transaction.hash.concatI32(event.logIndex.toI32())
  )
  entity.follower = event.params.follower
  entity.followed = event.params.followed

  entity.blockNumber = event.block.number
  entity.blockTimestamp = event.block.timestamp
  entity.transactionHash = event.transaction.hash

  entity.save()
}

export function handleSetBio(event: SetBioEvent): void {
  let entity = new SetBio(
    event.transaction.hash.concatI32(event.logIndex.toI32())
  )
  entity.userId = event.params.userId
  entity.bio = event.params.bio

  entity.blockNumber = event.block.number
  entity.blockTimestamp = event.block.timestamp
  entity.transactionHash = event.transaction.hash

  entity.save()
}

export function handleSetDateOfBirth(event: SetDateOfBirthEvent): void {
  let entity = new SetDateOfBirth(
    event.transaction.hash.concatI32(event.logIndex.toI32())
  )
  entity.userId = event.params.userId
  entity.dateOfBirth = event.params.dateOfBirth

  entity.blockNumber = event.block.number
  entity.blockTimestamp = event.block.timestamp
  entity.transactionHash = event.transaction.hash

  entity.save()
}

export function handleSetDiscord(event: SetDiscordEvent): void {
  let entity = new SetDiscord(
    event.transaction.hash.concatI32(event.logIndex.toI32())
  )
  entity.userId = event.params.userId
  entity.discord = event.params.discord

  entity.blockNumber = event.block.number
  entity.blockTimestamp = event.block.timestamp
  entity.transactionHash = event.transaction.hash

  entity.save()
}

export function handleSetEmail(event: SetEmailEvent): void {
  let entity = new SetEmail(
    event.transaction.hash.concatI32(event.logIndex.toI32())
  )
  entity.userId = event.params.userId
  entity.email = event.params.email

  entity.blockNumber = event.block.number
  entity.blockTimestamp = event.block.timestamp
  entity.transactionHash = event.transaction.hash

  entity.save()
}

export function handleSetEmailVerifiedData(
  event: SetEmailVerifiedDataEvent
): void {
  let entity = new SetEmailVerifiedData(
    event.transaction.hash.concatI32(event.logIndex.toI32())
  )
  entity.userId = event.params.userId
  entity.data = event.params.data

  entity.blockNumber = event.block.number
  entity.blockTimestamp = event.block.timestamp
  entity.transactionHash = event.transaction.hash

  entity.save()
}

export function handleSetFingerScan(event: SetFingerScanEvent): void {
  let entity = new SetFingerScan(
    event.transaction.hash.concatI32(event.logIndex.toI32())
  )
  entity.userId = event.params.userId
  entity.fingerScan = event.params.fingerScan

  entity.blockNumber = event.block.number
  entity.blockTimestamp = event.block.timestamp
  entity.transactionHash = event.transaction.hash

  entity.save()
}

export function handleSetFirstName(event: SetFirstNameEvent): void {
  let entity = new SetFirstName(
    event.transaction.hash.concatI32(event.logIndex.toI32())
  )
  entity.userId = event.params.userId
  entity.firstName = event.params.firstName

  entity.blockNumber = event.block.number
  entity.blockTimestamp = event.block.timestamp
  entity.transactionHash = event.transaction.hash

  entity.save()
}

export function handleSetGovID(event: SetGovIDEvent): void {
  let entity = new SetGovID(
    event.transaction.hash.concatI32(event.logIndex.toI32())
  )
  entity.userId = event.params.userId
  entity.govID = event.params.govID

  entity.blockNumber = event.block.number
  entity.blockTimestamp = event.block.timestamp
  entity.transactionHash = event.transaction.hash

  entity.save()
}

export function handleSetInstagram(event: SetInstagramEvent): void {
  let entity = new SetInstagram(
    event.transaction.hash.concatI32(event.logIndex.toI32())
  )
  entity.userId = event.params.userId
  entity.instagram = event.params.instagram

  entity.blockNumber = event.block.number
  entity.blockTimestamp = event.block.timestamp
  entity.transactionHash = event.transaction.hash

  entity.save()
}

export function handleSetLastName(event: SetLastNameEvent): void {
  let entity = new SetLastName(
    event.transaction.hash.concatI32(event.logIndex.toI32())
  )
  entity.userId = event.params.userId
  entity.lastName = event.params.lastName

  entity.blockNumber = event.block.number
  entity.blockTimestamp = event.block.timestamp
  entity.transactionHash = event.transaction.hash

  entity.save()
}

export function handleSetMiddleName(event: SetMiddleNameEvent): void {
  let entity = new SetMiddleName(
    event.transaction.hash.concatI32(event.logIndex.toI32())
  )
  entity.userId = event.params.userId
  entity.middleName = event.params.middleName

  entity.blockNumber = event.block.number
  entity.blockTimestamp = event.block.timestamp
  entity.transactionHash = event.transaction.hash

  entity.save()
}

export function handleSetPictureNFT(event: SetPictureNFTEvent): void {
  let entity = new SetPictureNFT(
    event.transaction.hash.concatI32(event.logIndex.toI32())
  )
  entity.userId = event.params.userId
  entity.nftAddress = event.params.nftAddress
  entity.id = event.params.id

  entity.blockNumber = event.block.number
  entity.blockTimestamp = event.block.timestamp
  entity.transactionHash = event.transaction.hash

  entity.save()
}

export function handleSetPictureUpload(event: SetPictureUploadEvent): void {
  let entity = new SetPictureUpload(
    event.transaction.hash.concatI32(event.logIndex.toI32())
  )
  entity.userId = event.params.userId
  entity.url = event.params.url

  entity.blockNumber = event.block.number
  entity.blockTimestamp = event.block.timestamp
  entity.transactionHash = event.transaction.hash

  entity.save()
}

export function handleSetTelephone(event: SetTelephoneEvent): void {
  let entity = new SetTelephone(
    event.transaction.hash.concatI32(event.logIndex.toI32())
  )
  entity.userId = event.params.userId
  entity.telephone = event.params.telephone

  entity.blockNumber = event.block.number
  entity.blockTimestamp = event.block.timestamp
  entity.transactionHash = event.transaction.hash

  entity.save()
}

export function handleSetTelephoneVerifiedData(
  event: SetTelephoneVerifiedDataEvent
): void {
  let entity = new SetTelephoneVerifiedData(
    event.transaction.hash.concatI32(event.logIndex.toI32())
  )
  entity.userId = event.params.userId
  entity.data = event.params.data

  entity.blockNumber = event.block.number
  entity.blockTimestamp = event.block.timestamp
  entity.transactionHash = event.transaction.hash

  entity.save()
}

export function handleSetTiktok(event: SetTiktokEvent): void {
  let entity = new SetTiktok(
    event.transaction.hash.concatI32(event.logIndex.toI32())
  )
  entity.userId = event.params.userId
  entity.tiktok = event.params.tiktok

  entity.blockNumber = event.block.number
  entity.blockTimestamp = event.block.timestamp
  entity.transactionHash = event.transaction.hash

  entity.save()
}

export function handleSetTwitter(event: SetTwitterEvent): void {
  let entity = new SetTwitter(
    event.transaction.hash.concatI32(event.logIndex.toI32())
  )
  entity.userId = event.params.userId
  entity.twitter = event.params.twitter

  entity.blockNumber = event.block.number
  entity.blockTimestamp = event.block.timestamp
  entity.transactionHash = event.transaction.hash

  entity.save()
}

export function handleSetUsername(event: SetUsernameEvent): void {
  let entity = new SetUsername(
    event.transaction.hash.concatI32(event.logIndex.toI32())
  )
  entity.userId = event.params.userId
  entity.username = event.params.username

  entity.blockNumber = event.block.number
  entity.blockTimestamp = event.block.timestamp
  entity.transactionHash = event.transaction.hash

  entity.save()
}

export function handleSignupBasic(event: SignupBasicEvent): void {
  let entity = new SignupBasic(
    event.transaction.hash.concatI32(event.logIndex.toI32())
  )
  entity.userId = event.params.userId
  entity._userAddress = event.params._userAddress
  entity.names = event.params.names
  entity.socialInfo = event.params.socialInfo
  entity.userContact = event.params.userContact

  entity.blockNumber = event.block.number
  entity.blockTimestamp = event.block.timestamp
  entity.transactionHash = event.transaction.hash

  entity.save()
}

export function handleSignupProfileInfo(event: SignupProfileInfoEvent): void {
  let entity = new SignupProfileInfo(
    event.transaction.hash.concatI32(event.logIndex.toI32())
  )
  entity.userId = event.params.userId
  entity.pronoun = event.params.pronoun
  entity.dateOfBirth = event.params.dateOfBirth
  entity.profile = event.params.profile
  entity.bio = event.params.bio
  entity.nftAddress = event.params.nftAddress
  entity.ownedID = event.params.ownedID
  entity.verificationData = event.params.verificationData

  entity.blockNumber = event.block.number
  entity.blockTimestamp = event.block.timestamp
  entity.transactionHash = event.transaction.hash

  entity.save()
}

export function handleUnFollow(event: UnFollowEvent): void {
  let entity = new UnFollow(
    event.transaction.hash.concatI32(event.logIndex.toI32())
  )
  entity.follower = event.params.follower
  entity.followed = event.params.followed

  entity.blockNumber = event.block.number
  entity.blockTimestamp = event.block.timestamp
  entity.transactionHash = event.transaction.hash

  entity.save()
}
