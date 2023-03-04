// THIS IS AN AUTOGENERATED FILE. DO NOT EDIT THIS FILE DIRECTLY.

import {
  ethereum,
  JSONValue,
  TypedMap,
  Entity,
  Bytes,
  Address,
  BigInt
} from "@graphprotocol/graph-ts";

export class CreateGroup extends ethereum.Event {
  get params(): CreateGroup__Params {
    return new CreateGroup__Params(this);
  }
}

export class CreateGroup__Params {
  _event: CreateGroup;

  constructor(event: CreateGroup) {
    this._event = event;
  }

  get userID(): BigInt {
    return this._event.parameters[0].value.toBigInt();
  }

  get groupID(): BigInt {
    return this._event.parameters[1].value.toBigInt();
  }

  get name(): string {
    return this._event.parameters[2].value.toString();
  }

  get about(): string {
    return this._event.parameters[3].value.toString();
  }

  get description(): string {
    return this._event.parameters[4].value.toString();
  }

  get isPrivateGroup(): boolean {
    return this._event.parameters[5].value.toBoolean();
  }
}

export class CreatePostGroup extends ethereum.Event {
  get params(): CreatePostGroup__Params {
    return new CreatePostGroup__Params(this);
  }
}

export class CreatePostGroup__Params {
  _event: CreatePostGroup;

  constructor(event: CreatePostGroup) {
    this._event = event;
  }

  get userID(): BigInt {
    return this._event.parameters[0].value.toBigInt();
  }

  get postID(): BigInt {
    return this._event.parameters[1].value.toBigInt();
  }

  get groupID(): BigInt {
    return this._event.parameters[2].value.toBigInt();
  }

  get name(): string {
    return this._event.parameters[3].value.toString();
  }

  get about(): string {
    return this._event.parameters[4].value.toString();
  }

  get description(): string {
    return this._event.parameters[5].value.toString();
  }

  get isPrivateGroup(): boolean {
    return this._event.parameters[6].value.toBoolean();
  }

  get correspondingNftAddress(): Address {
    return this._event.parameters[7].value.toAddress();
  }
}

export class DeleteGroup extends ethereum.Event {
  get params(): DeleteGroup__Params {
    return new DeleteGroup__Params(this);
  }
}

export class DeleteGroup__Params {
  _event: DeleteGroup;

  constructor(event: DeleteGroup) {
    this._event = event;
  }

  get groupId(): BigInt {
    return this._event.parameters[0].value.toBigInt();
  }
}

export class Follow extends ethereum.Event {
  get params(): Follow__Params {
    return new Follow__Params(this);
  }
}

export class Follow__Params {
  _event: Follow;

  constructor(event: Follow) {
    this._event = event;
  }

  get follower(): BigInt {
    return this._event.parameters[0].value.toBigInt();
  }

  get followedGroup(): BigInt {
    return this._event.parameters[1].value.toBigInt();
  }
}

export class MintBatch extends ethereum.Event {
  get params(): MintBatch__Params {
    return new MintBatch__Params(this);
  }
}

export class MintBatch__Params {
  _event: MintBatch;

  constructor(event: MintBatch) {
    this._event = event;
  }

  get addedUsers(): Array<BigInt> {
    return this._event.parameters[0].value.toBigIntArray();
  }

  get _groupID(): BigInt {
    return this._event.parameters[1].value.toBigInt();
  }

  get mintedIDs(): Array<BigInt> {
    return this._event.parameters[2].value.toBigIntArray();
  }
}

export class UnFollow extends ethereum.Event {
  get params(): UnFollow__Params {
    return new UnFollow__Params(this);
  }
}

export class UnFollow__Params {
  _event: UnFollow;

  constructor(event: UnFollow) {
    this._event = event;
  }

  get follower(): BigInt {
    return this._event.parameters[0].value.toBigInt();
  }

  get followedGroup(): BigInt {
    return this._event.parameters[1].value.toBigInt();
  }
}

export class UpdateBanStatus extends ethereum.Event {
  get params(): UpdateBanStatus__Params {
    return new UpdateBanStatus__Params(this);
  }
}

export class UpdateBanStatus__Params {
  _event: UpdateBanStatus;

  constructor(event: UpdateBanStatus) {
    this._event = event;
  }

  get groupId(): BigInt {
    return this._event.parameters[0].value.toBigInt();
  }

  get userID(): BigInt {
    return this._event.parameters[1].value.toBigInt();
  }

  get isBanned(): boolean {
    return this._event.parameters[2].value.toBoolean();
  }
}

export class UpdateGroupAbout extends ethereum.Event {
  get params(): UpdateGroupAbout__Params {
    return new UpdateGroupAbout__Params(this);
  }
}

export class UpdateGroupAbout__Params {
  _event: UpdateGroupAbout;

  constructor(event: UpdateGroupAbout) {
    this._event = event;
  }

  get groupId(): BigInt {
    return this._event.parameters[0].value.toBigInt();
  }

  get about(): string {
    return this._event.parameters[1].value.toString();
  }
}

export class UpdateGroupName extends ethereum.Event {
  get params(): UpdateGroupName__Params {
    return new UpdateGroupName__Params(this);
  }
}

export class UpdateGroupName__Params {
  _event: UpdateGroupName;

  constructor(event: UpdateGroupName) {
    this._event = event;
  }

  get groupId(): BigInt {
    return this._event.parameters[0].value.toBigInt();
  }

  get name(): string {
    return this._event.parameters[1].value.toString();
  }
}

export class UpdateGroupPrivacy extends ethereum.Event {
  get params(): UpdateGroupPrivacy__Params {
    return new UpdateGroupPrivacy__Params(this);
  }
}

export class UpdateGroupPrivacy__Params {
  _event: UpdateGroupPrivacy;

  constructor(event: UpdateGroupPrivacy) {
    this._event = event;
  }

  get groupId(): BigInt {
    return this._event.parameters[0].value.toBigInt();
  }

  get isPrivate(): boolean {
    return this._event.parameters[1].value.toBoolean();
  }
}

export class groups__groupByIDResult {
  value0: string;
  value1: string;
  value2: string;
  value3: Address;

  constructor(value0: string, value1: string, value2: string, value3: Address) {
    this.value0 = value0;
    this.value1 = value1;
    this.value2 = value2;
    this.value3 = value3;
  }

  toMap(): TypedMap<string, ethereum.Value> {
    let map = new TypedMap<string, ethereum.Value>();
    map.set("value0", ethereum.Value.fromString(this.value0));
    map.set("value1", ethereum.Value.fromString(this.value1));
    map.set("value2", ethereum.Value.fromString(this.value2));
    map.set("value3", ethereum.Value.fromAddress(this.value3));
    return map;
  }

  getName(): string {
    return this.value0;
  }

  getAbout(): string {
    return this.value1;
  }

  getDescription(): string {
    return this.value2;
  }

  getAuthor(): Address {
    return this.value3;
  }
}

export class groups__postContractCreateGroupResult {
  value0: BigInt;
  value1: Address;

  constructor(value0: BigInt, value1: Address) {
    this.value0 = value0;
    this.value1 = value1;
  }

  toMap(): TypedMap<string, ethereum.Value> {
    let map = new TypedMap<string, ethereum.Value>();
    map.set("value0", ethereum.Value.fromUnsignedBigInt(this.value0));
    map.set("value1", ethereum.Value.fromAddress(this.value1));
    return map;
  }

  get_groupID(): BigInt {
    return this.value0;
  }

  getGroupAddress(): Address {
    return this.value1;
  }
}

export class groups extends ethereum.SmartContract {
  static bind(address: Address): groups {
    return new groups("groups", address);
  }

  NftAddressByID(param0: BigInt): Address {
    let result = super.call(
      "NftAddressByID",
      "NftAddressByID(uint256):(address)",
      [ethereum.Value.fromUnsignedBigInt(param0)]
    );

    return result[0].toAddress();
  }

  try_NftAddressByID(param0: BigInt): ethereum.CallResult<Address> {
    let result = super.tryCall(
      "NftAddressByID",
      "NftAddressByID(uint256):(address)",
      [ethereum.Value.fromUnsignedBigInt(param0)]
    );
    if (result.reverted) {
      return new ethereum.CallResult();
    }
    let value = result.value;
    return ethereum.CallResult.fromValue(value[0].toAddress());
  }

  administration(): Address {
    let result = super.call("administration", "administration():(address)", []);

    return result[0].toAddress();
  }

  try_administration(): ethereum.CallResult<Address> {
    let result = super.tryCall(
      "administration",
      "administration():(address)",
      []
    );
    if (result.reverted) {
      return new ethereum.CallResult();
    }
    let value = result.value;
    return ethereum.CallResult.fromValue(value[0].toAddress());
  }

  checkGroupExist(groupID: BigInt): boolean {
    let result = super.call(
      "checkGroupExist",
      "checkGroupExist(uint256):(bool)",
      [ethereum.Value.fromUnsignedBigInt(groupID)]
    );

    return result[0].toBoolean();
  }

  try_checkGroupExist(groupID: BigInt): ethereum.CallResult<boolean> {
    let result = super.tryCall(
      "checkGroupExist",
      "checkGroupExist(uint256):(bool)",
      [ethereum.Value.fromUnsignedBigInt(groupID)]
    );
    if (result.reverted) {
      return new ethereum.CallResult();
    }
    let value = result.value;
    return ethereum.CallResult.fromValue(value[0].toBoolean());
  }

  checkGroupNameExist(_name: string): boolean {
    let result = super.call(
      "checkGroupNameExist",
      "checkGroupNameExist(string):(bool)",
      [ethereum.Value.fromString(_name)]
    );

    return result[0].toBoolean();
  }

  try_checkGroupNameExist(_name: string): ethereum.CallResult<boolean> {
    let result = super.tryCall(
      "checkGroupNameExist",
      "checkGroupNameExist(string):(bool)",
      [ethereum.Value.fromString(_name)]
    );
    if (result.reverted) {
      return new ethereum.CallResult();
    }
    let value = result.value;
    return ethereum.CallResult.fromValue(value[0].toBoolean());
  }

  createGroup(
    _user: Address,
    _name: string,
    _about: string,
    _description: string,
    _private: boolean,
    expiredSession: Bytes,
    newSession: Bytes
  ): BigInt {
    let result = super.call(
      "createGroup",
      "createGroup(address,string,string,string,bool,bytes32,bytes32):(uint256)",
      [
        ethereum.Value.fromAddress(_user),
        ethereum.Value.fromString(_name),
        ethereum.Value.fromString(_about),
        ethereum.Value.fromString(_description),
        ethereum.Value.fromBoolean(_private),
        ethereum.Value.fromFixedBytes(expiredSession),
        ethereum.Value.fromFixedBytes(newSession)
      ]
    );

    return result[0].toBigInt();
  }

  try_createGroup(
    _user: Address,
    _name: string,
    _about: string,
    _description: string,
    _private: boolean,
    expiredSession: Bytes,
    newSession: Bytes
  ): ethereum.CallResult<BigInt> {
    let result = super.tryCall(
      "createGroup",
      "createGroup(address,string,string,string,bool,bytes32,bytes32):(uint256)",
      [
        ethereum.Value.fromAddress(_user),
        ethereum.Value.fromString(_name),
        ethereum.Value.fromString(_about),
        ethereum.Value.fromString(_description),
        ethereum.Value.fromBoolean(_private),
        ethereum.Value.fromFixedBytes(expiredSession),
        ethereum.Value.fromFixedBytes(newSession)
      ]
    );
    if (result.reverted) {
      return new ethereum.CallResult();
    }
    let value = result.value;
    return ethereum.CallResult.fromValue(value[0].toBigInt());
  }

  groupByID(param0: BigInt): groups__groupByIDResult {
    let result = super.call(
      "groupByID",
      "groupByID(uint256):(string,string,string,address)",
      [ethereum.Value.fromUnsignedBigInt(param0)]
    );

    return new groups__groupByIDResult(
      result[0].toString(),
      result[1].toString(),
      result[2].toString(),
      result[3].toAddress()
    );
  }

  try_groupByID(param0: BigInt): ethereum.CallResult<groups__groupByIDResult> {
    let result = super.tryCall(
      "groupByID",
      "groupByID(uint256):(string,string,string,address)",
      [ethereum.Value.fromUnsignedBigInt(param0)]
    );
    if (result.reverted) {
      return new ethereum.CallResult();
    }
    let value = result.value;
    return ethereum.CallResult.fromValue(
      new groups__groupByIDResult(
        value[0].toString(),
        value[1].toString(),
        value[2].toString(),
        value[3].toAddress()
      )
    );
  }

  groupIdByName(param0: string): BigInt {
    let result = super.call(
      "groupIdByName",
      "groupIdByName(string):(uint256)",
      [ethereum.Value.fromString(param0)]
    );

    return result[0].toBigInt();
  }

  try_groupIdByName(param0: string): ethereum.CallResult<BigInt> {
    let result = super.tryCall(
      "groupIdByName",
      "groupIdByName(string):(uint256)",
      [ethereum.Value.fromString(param0)]
    );
    if (result.reverted) {
      return new ethereum.CallResult();
    }
    let value = result.value;
    return ethereum.CallResult.fromValue(value[0].toBigInt());
  }

  groupURI(param0: BigInt): string {
    let result = super.call("groupURI", "groupURI(uint256):(string)", [
      ethereum.Value.fromUnsignedBigInt(param0)
    ]);

    return result[0].toString();
  }

  try_groupURI(param0: BigInt): ethereum.CallResult<string> {
    let result = super.tryCall("groupURI", "groupURI(uint256):(string)", [
      ethereum.Value.fromUnsignedBigInt(param0)
    ]);
    if (result.reverted) {
      return new ethereum.CallResult();
    }
    let value = result.value;
    return ethereum.CallResult.fromValue(value[0].toString());
  }

  isBannedFromGroup(param0: BigInt, param1: Address): boolean {
    let result = super.call(
      "isBannedFromGroup",
      "isBannedFromGroup(uint256,address):(bool)",
      [
        ethereum.Value.fromUnsignedBigInt(param0),
        ethereum.Value.fromAddress(param1)
      ]
    );

    return result[0].toBoolean();
  }

  try_isBannedFromGroup(
    param0: BigInt,
    param1: Address
  ): ethereum.CallResult<boolean> {
    let result = super.tryCall(
      "isBannedFromGroup",
      "isBannedFromGroup(uint256,address):(bool)",
      [
        ethereum.Value.fromUnsignedBigInt(param0),
        ethereum.Value.fromAddress(param1)
      ]
    );
    if (result.reverted) {
      return new ethereum.CallResult();
    }
    let value = result.value;
    return ethereum.CallResult.fromValue(value[0].toBoolean());
  }

  isFollowingGroup(param0: BigInt, param1: BigInt): boolean {
    let result = super.call(
      "isFollowingGroup",
      "isFollowingGroup(uint256,uint256):(bool)",
      [
        ethereum.Value.fromUnsignedBigInt(param0),
        ethereum.Value.fromUnsignedBigInt(param1)
      ]
    );

    return result[0].toBoolean();
  }

  try_isFollowingGroup(
    param0: BigInt,
    param1: BigInt
  ): ethereum.CallResult<boolean> {
    let result = super.tryCall(
      "isFollowingGroup",
      "isFollowingGroup(uint256,uint256):(bool)",
      [
        ethereum.Value.fromUnsignedBigInt(param0),
        ethereum.Value.fromUnsignedBigInt(param1)
      ]
    );
    if (result.reverted) {
      return new ethereum.CallResult();
    }
    let value = result.value;
    return ethereum.CallResult.fromValue(value[0].toBoolean());
  }

  isGroupAdmin(_groupId: BigInt, _user: Address): boolean {
    let result = super.call(
      "isGroupAdmin",
      "isGroupAdmin(uint256,address):(bool)",
      [
        ethereum.Value.fromUnsignedBigInt(_groupId),
        ethereum.Value.fromAddress(_user)
      ]
    );

    return result[0].toBoolean();
  }

  try_isGroupAdmin(
    _groupId: BigInt,
    _user: Address
  ): ethereum.CallResult<boolean> {
    let result = super.tryCall(
      "isGroupAdmin",
      "isGroupAdmin(uint256,address):(bool)",
      [
        ethereum.Value.fromUnsignedBigInt(_groupId),
        ethereum.Value.fromAddress(_user)
      ]
    );
    if (result.reverted) {
      return new ethereum.CallResult();
    }
    let value = result.value;
    return ethereum.CallResult.fromValue(value[0].toBoolean());
  }

  isGroupAuthor(groupId: BigInt, _user: Address): boolean {
    let result = super.call(
      "isGroupAuthor",
      "isGroupAuthor(uint256,address):(bool)",
      [
        ethereum.Value.fromUnsignedBigInt(groupId),
        ethereum.Value.fromAddress(_user)
      ]
    );

    return result[0].toBoolean();
  }

  try_isGroupAuthor(
    groupId: BigInt,
    _user: Address
  ): ethereum.CallResult<boolean> {
    let result = super.tryCall(
      "isGroupAuthor",
      "isGroupAuthor(uint256,address):(bool)",
      [
        ethereum.Value.fromUnsignedBigInt(groupId),
        ethereum.Value.fromAddress(_user)
      ]
    );
    if (result.reverted) {
      return new ethereum.CallResult();
    }
    let value = result.value;
    return ethereum.CallResult.fromValue(value[0].toBoolean());
  }

  isPrivate(param0: BigInt): boolean {
    let result = super.call("isPrivate", "isPrivate(uint256):(bool)", [
      ethereum.Value.fromUnsignedBigInt(param0)
    ]);

    return result[0].toBoolean();
  }

  try_isPrivate(param0: BigInt): ethereum.CallResult<boolean> {
    let result = super.tryCall("isPrivate", "isPrivate(uint256):(bool)", [
      ethereum.Value.fromUnsignedBigInt(param0)
    ]);
    if (result.reverted) {
      return new ethereum.CallResult();
    }
    let value = result.value;
    return ethereum.CallResult.fromValue(value[0].toBoolean());
  }

  name(): string {
    let result = super.call("name", "name():(string)", []);

    return result[0].toString();
  }

  try_name(): ethereum.CallResult<string> {
    let result = super.tryCall("name", "name():(string)", []);
    if (result.reverted) {
      return new ethereum.CallResult();
    }
    let value = result.value;
    return ethereum.CallResult.fromValue(value[0].toString());
  }

  postContractCreateGroup(
    _user: Address,
    postId: BigInt,
    _name: string,
    _about: string,
    _private: boolean,
    uri: string,
    description: string
  ): groups__postContractCreateGroupResult {
    let result = super.call(
      "postContractCreateGroup",
      "postContractCreateGroup(address,uint256,string,string,bool,string,string):(uint256,address)",
      [
        ethereum.Value.fromAddress(_user),
        ethereum.Value.fromUnsignedBigInt(postId),
        ethereum.Value.fromString(_name),
        ethereum.Value.fromString(_about),
        ethereum.Value.fromBoolean(_private),
        ethereum.Value.fromString(uri),
        ethereum.Value.fromString(description)
      ]
    );

    return new groups__postContractCreateGroupResult(
      result[0].toBigInt(),
      result[1].toAddress()
    );
  }

  try_postContractCreateGroup(
    _user: Address,
    postId: BigInt,
    _name: string,
    _about: string,
    _private: boolean,
    uri: string,
    description: string
  ): ethereum.CallResult<groups__postContractCreateGroupResult> {
    let result = super.tryCall(
      "postContractCreateGroup",
      "postContractCreateGroup(address,uint256,string,string,bool,string,string):(uint256,address)",
      [
        ethereum.Value.fromAddress(_user),
        ethereum.Value.fromUnsignedBigInt(postId),
        ethereum.Value.fromString(_name),
        ethereum.Value.fromString(_about),
        ethereum.Value.fromBoolean(_private),
        ethereum.Value.fromString(uri),
        ethereum.Value.fromString(description)
      ]
    );
    if (result.reverted) {
      return new ethereum.CallResult();
    }
    let value = result.value;
    return ethereum.CallResult.fromValue(
      new groups__postContractCreateGroupResult(
        value[0].toBigInt(),
        value[1].toAddress()
      )
    );
  }

  postGroupByPost(param0: BigInt): BigInt {
    let result = super.call(
      "postGroupByPost",
      "postGroupByPost(uint256):(uint256)",
      [ethereum.Value.fromUnsignedBigInt(param0)]
    );

    return result[0].toBigInt();
  }

  try_postGroupByPost(param0: BigInt): ethereum.CallResult<BigInt> {
    let result = super.tryCall(
      "postGroupByPost",
      "postGroupByPost(uint256):(uint256)",
      [ethereum.Value.fromUnsignedBigInt(param0)]
    );
    if (result.reverted) {
      return new ethereum.CallResult();
    }
    let value = result.value;
    return ethereum.CallResult.fromValue(value[0].toBigInt());
  }

  user(): Address {
    let result = super.call("user", "user():(address)", []);

    return result[0].toAddress();
  }

  try_user(): ethereum.CallResult<Address> {
    let result = super.tryCall("user", "user():(address)", []);
    if (result.reverted) {
      return new ethereum.CallResult();
    }
    let value = result.value;
    return ethereum.CallResult.fromValue(value[0].toAddress());
  }
}

export class ConstructorCall extends ethereum.Call {
  get inputs(): ConstructorCall__Inputs {
    return new ConstructorCall__Inputs(this);
  }

  get outputs(): ConstructorCall__Outputs {
    return new ConstructorCall__Outputs(this);
  }
}

export class ConstructorCall__Inputs {
  _call: ConstructorCall;

  constructor(call: ConstructorCall) {
    this._call = call;
  }

  get _administration(): Address {
    return this._call.inputValues[0].value.toAddress();
  }

  get _userContract(): Address {
    return this._call.inputValues[1].value.toAddress();
  }
}

export class ConstructorCall__Outputs {
  _call: ConstructorCall;

  constructor(call: ConstructorCall) {
    this._call = call;
  }
}

export class CreateGroupCall extends ethereum.Call {
  get inputs(): CreateGroupCall__Inputs {
    return new CreateGroupCall__Inputs(this);
  }

  get outputs(): CreateGroupCall__Outputs {
    return new CreateGroupCall__Outputs(this);
  }
}

export class CreateGroupCall__Inputs {
  _call: CreateGroupCall;

  constructor(call: CreateGroupCall) {
    this._call = call;
  }

  get _user(): Address {
    return this._call.inputValues[0].value.toAddress();
  }

  get _name(): string {
    return this._call.inputValues[1].value.toString();
  }

  get _about(): string {
    return this._call.inputValues[2].value.toString();
  }

  get _description(): string {
    return this._call.inputValues[3].value.toString();
  }

  get _private(): boolean {
    return this._call.inputValues[4].value.toBoolean();
  }

  get expiredSession(): Bytes {
    return this._call.inputValues[5].value.toBytes();
  }

  get newSession(): Bytes {
    return this._call.inputValues[6].value.toBytes();
  }
}

export class CreateGroupCall__Outputs {
  _call: CreateGroupCall;

  constructor(call: CreateGroupCall) {
    this._call = call;
  }

  get _groupID(): BigInt {
    return this._call.outputValues[0].value.toBigInt();
  }
}

export class DeleteGroupCall extends ethereum.Call {
  get inputs(): DeleteGroupCall__Inputs {
    return new DeleteGroupCall__Inputs(this);
  }

  get outputs(): DeleteGroupCall__Outputs {
    return new DeleteGroupCall__Outputs(this);
  }
}

export class DeleteGroupCall__Inputs {
  _call: DeleteGroupCall;

  constructor(call: DeleteGroupCall) {
    this._call = call;
  }

  get _user(): Address {
    return this._call.inputValues[0].value.toAddress();
  }

  get groupId(): BigInt {
    return this._call.inputValues[1].value.toBigInt();
  }

  get expiredSession(): Bytes {
    return this._call.inputValues[2].value.toBytes();
  }

  get newSession(): Bytes {
    return this._call.inputValues[3].value.toBytes();
  }
}

export class DeleteGroupCall__Outputs {
  _call: DeleteGroupCall;

  constructor(call: DeleteGroupCall) {
    this._call = call;
  }
}

export class FollowCall extends ethereum.Call {
  get inputs(): FollowCall__Inputs {
    return new FollowCall__Inputs(this);
  }

  get outputs(): FollowCall__Outputs {
    return new FollowCall__Outputs(this);
  }
}

export class FollowCall__Inputs {
  _call: FollowCall;

  constructor(call: FollowCall) {
    this._call = call;
  }

  get follower(): Address {
    return this._call.inputValues[0].value.toAddress();
  }

  get followed(): BigInt {
    return this._call.inputValues[1].value.toBigInt();
  }

  get expiredSession(): Bytes {
    return this._call.inputValues[2].value.toBytes();
  }

  get newSession(): Bytes {
    return this._call.inputValues[3].value.toBytes();
  }
}

export class FollowCall__Outputs {
  _call: FollowCall;

  constructor(call: FollowCall) {
    this._call = call;
  }
}

export class MintBatchCall extends ethereum.Call {
  get inputs(): MintBatchCall__Inputs {
    return new MintBatchCall__Inputs(this);
  }

  get outputs(): MintBatchCall__Outputs {
    return new MintBatchCall__Outputs(this);
  }
}

export class MintBatchCall__Inputs {
  _call: MintBatchCall;

  constructor(call: MintBatchCall) {
    this._call = call;
  }

  get _user(): Address {
    return this._call.inputValues[0].value.toAddress();
  }

  get addedUsers(): Array<BigInt> {
    return this._call.inputValues[1].value.toBigIntArray();
  }

  get _groupID(): BigInt {
    return this._call.inputValues[2].value.toBigInt();
  }

  get expiredSession(): Bytes {
    return this._call.inputValues[3].value.toBytes();
  }

  get newSession(): Bytes {
    return this._call.inputValues[4].value.toBytes();
  }
}

export class MintBatchCall__Outputs {
  _call: MintBatchCall;

  constructor(call: MintBatchCall) {
    this._call = call;
  }
}

export class PostContractCreateGroupCall extends ethereum.Call {
  get inputs(): PostContractCreateGroupCall__Inputs {
    return new PostContractCreateGroupCall__Inputs(this);
  }

  get outputs(): PostContractCreateGroupCall__Outputs {
    return new PostContractCreateGroupCall__Outputs(this);
  }
}

export class PostContractCreateGroupCall__Inputs {
  _call: PostContractCreateGroupCall;

  constructor(call: PostContractCreateGroupCall) {
    this._call = call;
  }

  get _user(): Address {
    return this._call.inputValues[0].value.toAddress();
  }

  get postId(): BigInt {
    return this._call.inputValues[1].value.toBigInt();
  }

  get _name(): string {
    return this._call.inputValues[2].value.toString();
  }

  get _about(): string {
    return this._call.inputValues[3].value.toString();
  }

  get _private(): boolean {
    return this._call.inputValues[4].value.toBoolean();
  }

  get uri(): string {
    return this._call.inputValues[5].value.toString();
  }

  get description(): string {
    return this._call.inputValues[6].value.toString();
  }
}

export class PostContractCreateGroupCall__Outputs {
  _call: PostContractCreateGroupCall;

  constructor(call: PostContractCreateGroupCall) {
    this._call = call;
  }

  get _groupID(): BigInt {
    return this._call.outputValues[0].value.toBigInt();
  }

  get groupAddress(): Address {
    return this._call.outputValues[1].value.toAddress();
  }
}

export class SetBanUserCall extends ethereum.Call {
  get inputs(): SetBanUserCall__Inputs {
    return new SetBanUserCall__Inputs(this);
  }

  get outputs(): SetBanUserCall__Outputs {
    return new SetBanUserCall__Outputs(this);
  }
}

export class SetBanUserCall__Inputs {
  _call: SetBanUserCall;

  constructor(call: SetBanUserCall) {
    this._call = call;
  }

  get executor(): Address {
    return this._call.inputValues[0].value.toAddress();
  }

  get groupId(): BigInt {
    return this._call.inputValues[1].value.toBigInt();
  }

  get _user(): Address {
    return this._call.inputValues[2].value.toAddress();
  }

  get _banned(): boolean {
    return this._call.inputValues[3].value.toBoolean();
  }

  get expiredSession(): Bytes {
    return this._call.inputValues[4].value.toBytes();
  }

  get newSession(): Bytes {
    return this._call.inputValues[5].value.toBytes();
  }
}

export class SetBanUserCall__Outputs {
  _call: SetBanUserCall;

  constructor(call: SetBanUserCall) {
    this._call = call;
  }
}

export class SetUserCall extends ethereum.Call {
  get inputs(): SetUserCall__Inputs {
    return new SetUserCall__Inputs(this);
  }

  get outputs(): SetUserCall__Outputs {
    return new SetUserCall__Outputs(this);
  }
}

export class SetUserCall__Inputs {
  _call: SetUserCall;

  constructor(call: SetUserCall) {
    this._call = call;
  }

  get _user(): Address {
    return this._call.inputValues[0].value.toAddress();
  }
}

export class SetUserCall__Outputs {
  _call: SetUserCall;

  constructor(call: SetUserCall) {
    this._call = call;
  }
}

export class UnFollowCall extends ethereum.Call {
  get inputs(): UnFollowCall__Inputs {
    return new UnFollowCall__Inputs(this);
  }

  get outputs(): UnFollowCall__Outputs {
    return new UnFollowCall__Outputs(this);
  }
}

export class UnFollowCall__Inputs {
  _call: UnFollowCall;

  constructor(call: UnFollowCall) {
    this._call = call;
  }

  get follower(): Address {
    return this._call.inputValues[0].value.toAddress();
  }

  get followed(): BigInt {
    return this._call.inputValues[1].value.toBigInt();
  }

  get expiredSession(): Bytes {
    return this._call.inputValues[2].value.toBytes();
  }

  get newSession(): Bytes {
    return this._call.inputValues[3].value.toBytes();
  }
}

export class UnFollowCall__Outputs {
  _call: UnFollowCall;

  constructor(call: UnFollowCall) {
    this._call = call;
  }
}

export class UpdateGroupCall extends ethereum.Call {
  get inputs(): UpdateGroupCall__Inputs {
    return new UpdateGroupCall__Inputs(this);
  }

  get outputs(): UpdateGroupCall__Outputs {
    return new UpdateGroupCall__Outputs(this);
  }
}

export class UpdateGroupCall__Inputs {
  _call: UpdateGroupCall;

  constructor(call: UpdateGroupCall) {
    this._call = call;
  }

  get _user(): Address {
    return this._call.inputValues[0].value.toAddress();
  }

  get groupId(): BigInt {
    return this._call.inputValues[1].value.toBigInt();
  }

  get data(): Array<string> {
    return this._call.inputValues[2].value.toStringArray();
  }

  get fields(): Array<i32> {
    return this._call.inputValues[3].value.toI32Array();
  }

  get _private(): boolean {
    return this._call.inputValues[4].value.toBoolean();
  }

  get expiredSession(): Bytes {
    return this._call.inputValues[5].value.toBytes();
  }

  get newSession(): Bytes {
    return this._call.inputValues[6].value.toBytes();
  }
}

export class UpdateGroupCall__Outputs {
  _call: UpdateGroupCall;

  constructor(call: UpdateGroupCall) {
    this._call = call;
  }
}
