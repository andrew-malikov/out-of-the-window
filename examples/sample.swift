// Swift sample
import Foundation

enum Mode: String {
    case light, dark
}

struct Setting {
    let key: String
    let value: String
}

func serialize(_ settings: [Setting], mode: Mode) -> String {
    let pairs = settings.map { "\($0.key)=\($0.value)" }.joined(separator: "&")
    return "mode=\(mode.rawValue)&\(pairs)"
}

let data = [Setting(key: "font", value: "JetBrainsMono"), Setting(key: "size", value: "14")]
print(serialize(data, mode: .dark))
