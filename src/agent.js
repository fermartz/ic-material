import { Actor, HttpAgent } from "@dfinity/agent"
import { idlFactory as counter_idl } from "dfx-generated/counter/counter.did.js"
import { idlFactory as profile_idl } from "dfx-generated/profile/profile.did.js"
import canisterIds from "../.dfx/local/canister_ids.json"

const counter_id =
  new URLSearchParams(window.location.search).get("counterId") ||
  canisterIds.counter.local

const profile_id =
  new URLSearchParams(window.location.search).get("profileId") ||
  canisterIds.profile.local

const agentOptions = {
  host: "http://localhost:8000",
}

const agent = new HttpAgent(agentOptions)
const counter = Actor.createActor(counter_idl, {
  agent,
  canisterId: counter_id,
})
const profile = Actor.createActor(profile_idl, {
  agent,
  canisterId: profile_id,
})

export { counter, profile }
