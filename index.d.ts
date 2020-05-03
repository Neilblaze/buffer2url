/** @module buffer2url
 */
declare module "buffer2url" {
    /**
     * @param {string} mimeType
     * @param {Buffer} buffer
     * @return {Promise<string>}
     */
    export default function(mimeType: string, buffer: Buffer): Promise<string>;
}