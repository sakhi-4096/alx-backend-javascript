/**
 * Creates an array of {@link ClassRoom}s with specific sizes.
 * @returns {ClassRoom[]} An array of {@link ClassRoom} instances.
 */
import ClassRoom from './0-classroom'; // Importing ClassRoom from the previous snippet

export default function initializeRooms() {
  /**
   * An array of {@link ClassRoom} instances representing initialized classrooms.
   * @type {ClassRoom[]}
   */
  const rooms = [19, 20, 34].map((size) => new ClassRoom(size));

  return rooms;
}