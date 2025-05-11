export abstract class VersionModel {
    /** 上线版本 */
    public readonly version: string;
    /** 是否在测试版中出现, 默认 true */
    public readonly beta: boolean;

    protected constructor(
        version?: string,
        beta?: boolean
    ) {
        this.version = version ?? "1.0.0";
        this.beta = beta ?? true;
    }
}